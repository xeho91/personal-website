import { createTransport } from "nodemailer";

import type { ContactFormData, FeedbackType } from "$types";
import type { RequestHandler } from "@sveltejs/kit";
import type { MailOptions } from "nodemailer/lib/smtp-pool";


/** Object with credentials for communicating with the SMTP mail server */
const transport = createTransport({
	host: process.env["NODEMAILER_HOST"],
	port: Number(process.env["NODEMAILER_PORT"]),
	secure: true,
	auth: {
		user: process.env["NODEMAILER_USER"],
		pass: process.env["NODEMAILER_PASSWORD"],
	},
	tls: {
		rejectUnauthorized: true,
	},
});

/** Create an email for nodemailer with passed options and template */
function createEmail(formData: ContactFormData, referer: string) {
	const template = `
		<p style="font-style: italic;">A new message from the contact form<br />(on the website ${referer}):<br />
			From: <strong>${formData.firstName}</strong> (${formData.email})<br />
			Organization: ${formData.organization || "Not provided"}<br />
			Website: ${formData.website || "Not provided"}
		</p>

		---

		<p>${formData.message}</p>
	`;

	const email: MailOptions = {
		from: `"xeho91.com" <${process.env["SENDER_EMAIL"]}>`,
		to: process.env["RECIPIENT_EMAIL"],
		cc: formData.sendACopy ? formData.email : undefined,
		subject: formData.subject
			|| `[${
				process.env["SITE_DOMAIN"]
			}] A new message from ${formData.firstName}`,
		html: template,
		replyTo: formData.email,
	};

	return email;
}

/** Transform the string if it match specified pattern(s) */
function parseValue([key, value]: [string, string]) {
	let newValue;

	switch (value.toString()) {
		case "Yes":
			newValue = true;
			break;
		case "No":
			newValue = false;
			break;
		case "":
			newValue = null;
			break;
		default:
			newValue = value;
	}

	return [key, newValue];
}

/** Create stringified JSON body response */
function makeResponseBody(
	type: FeedbackType,
	text: string,
	backup?: MailOptions,
) {
	return JSON.stringify({ feedback: type, text, backup });
}

/*
 * NOTE: I can't use native Response API here,
 * because SvelteKit endpoints are different.
 * Sources:
 * - https://developer.mozilla.org/en-US/docs/Web/API/Response/Response
 * - https://kit.svelte.dev/docs#routing-endpoints
 */

/** Send a POST request to desired email server and return a response to client */
export const post: RequestHandler = async function({ body, headers }) {
	const incomingData = Object.entries(
		JSON.parse(body as string),
	) as [string, string][];
	/** Parsed data, for better developing usability */
	const parsedData: ContactFormData = Object.fromEntries(
		incomingData.map(parseValue),
	);
	const email = createEmail(parsedData, headers.referer);

	try {
		const response = await transport.sendMail(email);

		if (response.messageId) {
			return {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
				body: makeResponseBody(
					"success",
					"Message sent succesfully!",
				),
			};
		} else {
			return {
				status: 400,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
				body: makeResponseBody(
					"error",
					"Something went wrong with email server configuration.",
					email
				),
			};
		}
	} catch (error) {
		return {
			status: 500,
			headers: {
				"Content-Type": "application/json; charset-utf-8",
			},
			body: makeResponseBody("error", error.toString(), email),
		};
	}
};
