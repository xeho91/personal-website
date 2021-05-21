import { createTransport } from "nodemailer";

import type { RequestHandler } from "@sveltejs/kit";
import type { MailOptions } from "nodemailer/lib/smtp-pool";

export type ContactFormData = {
	firstName: string;
	email: string;
	organization: string | null;
	website: string | null;
	subject: string | null;
	message: string;
	sendACopy: boolean;
};

/** Object with credentials for communicating with the SMTP mail server */
const transport = createTransport({
	host: process.env["MAILTRAP_HOST"],
	port: Number(process.env["MAILTRAP_PORT"]),
	auth: {
		user: process.env["MAILTRAP_USER"],
		pass: process.env["MAILTRAP_PASSWORD"],
	},
});

/** Create an email for nodemailer with passed options and template */
function createEmail(formData: ContactFormData, referer: string) {
	const emailTemplate = `
		<p style="font-style: italic;">A new message from the contact form (on the website ${referer}):<br />
			<strong>${formData.firstName}</strong> (${formData.email})<br />
			Organization: ${formData.organization || "Not provided"}<br />
			Website: ${formData.website || "Not provided"}<br />
		</p>

		---

		<p>${formData.message}</p>
	`;

	const email: MailOptions = {
		from: process.env["SENDER_EMAIL"],
		to: process.env["RECIPIENT_EMAIL"],
		cc: formData.sendACopy ? formData.email : undefined,
		subject: formData.subject
			|| `[xeho91.site] A new message from ${formData.firstName}`,
		html: emailTemplate,
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

/** Send a POST request to desired email server and return a response to client */
export const post: RequestHandler = async function({ body, headers }) {
	const incomingData = Object.entries(JSON.parse(body as string)) as [
		string,
		string,
	][];
	/** Parsed data, for better developer usability */
	const parsedData: ContactFormData = Object.fromEntries(
		incomingData.map(parseValue),
	);

	try {
		const response = await transport.sendMail(
			createEmail(parsedData, headers.referer),
		);

		if (response.response.includes("Ok")) {
			return {
				status: 200,
				headers: {
					"Content-Type": "text/plain; charset=utf-8",
				},
				body: "Message sent succesfully!",
			};
		} else {
			return {
				status: 400,
				headers: {
					"Content-Type": "text/plain; charset=utf-8",
				},
				body: response.response.toString(),
			};
		}
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);

		return {
			status: 500,
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
			},
			body: body.toString(),
		};
	}
};
