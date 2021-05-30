<script lang="typescript">
	// https://github.com/html-to-text/node-html-to-text
	import { htmlToText } from "html-to-text";

	import ContactForm from "$lib/ContactForm.svelte";
	import Profile from "$lib/Profile.svelte";
	import Message from "$lib/Message.svelte";
	import Terminal from "$lib/Terminal.svelte";
	import Log from "$lib/Log.svelte";
	import Button from "$lib/Button/Normal.svelte";

	import type { FeedbackType } from "$types/Feedback";
	import type { ContactFormData } from "$types/ContactForm";
	import type { MailOptions } from "nodemailer/lib/stream-transport";

	import iconEmail from "@iconify-icons/carbon/email-new.js";

	interface ResponseData {
		feedback: FeedbackType;
		text: string;
		backup: MailOptions,
	}

	async function makeRequest(data: ContactFormData) {
		const request = await fetch("/api/email", {
			method: "POST",
			body: JSON.stringify(data),
		});

		return request.json() as Promise<ResponseData>;
	}

	function createBackupEmailLink({ to, subject, html }: MailOptions) {
		const body = encodeURIComponent(htmlToText(html, { wordwrap: false }));

		return `mailto:${to}?subject=${subject}&body=${body}`;
	}

	let formSubmitted = false;
	let request: Promise<ResponseData>;

	function handleSubmit(event: Event) {
		event.preventDefault();

		formSubmitted = true;

		const form = document.getElementById(
			"form_contact-me"
		) as HTMLFormElement;
		const data = new FormData(form);
		let wrappedData = {};

		data.forEach((value, key) => {
			Object.assign(wrappedData, { [key]: value });
		});

		request = makeRequest(wrappedData as ContactFormData);
	}
</script>

<h1>Get in touch with&nbsp;me</h1>

{#if !formSubmitted}
	<ContactForm on:submit={handleSubmit} />
{/if}

{#if formSubmitted}
	<Terminal title="Server">
		<Log type="info">
			Created the email envelope from the form data and sent it...
		</Log>

		{#await request}
			<Log>Receiving the response data...</Log>
		{:then data}
			<Log type={data.feedback}>{data.text}</Log>
		{/await}
	</Terminal>
{/if}

<Profile>
	{#if !formSubmitted}
		<Message>
			As I pledged to respect your privacy rights,
			<strong>I do not store your data</strong>.<br />
			The information filled in the form is purely just for contact purpose.
			For this reason, I only need your email to be able to reply to you.
		</Message>
	{:else}
		{#await request}
			<Message>Hold on, the server is doing the job...</Message>
		{:then response}
			{#if response.feedback === "success"}
				<Message>
					<strong>Thank you for reaching out!</strong>
				</Message>
				<Message>
					I check my email inbox frequently.<br />
					I will do my best to respond to you within 36 hours.<br />
					I appreciate your patience in advance. 🙏
				</Message>
			{:else}
				<Message>
					Something went wrong! 😞
				</Message>
				<Message>
					I didn't intend to waste your time, so you can
					<strong>click the button link to send email</strong>
					with your default email program.
					It will have the content of the message filled from the
					form in advance.
					<Button
						slot="actions"
						type="link"
						icon={iconEmail}
						title="Open an default email program with filled envelope"
						label="Send an email to me"
						href={createBackupEmailLink(response.backup)}
					/>
				</Message>
				<Message>
					I would appreciate very much if you also mention in the
					email that you encountered this problem.<br />
					It will help me if you copy the content of the server output.
				</Message>
			{/if}
		{/await}
	{/if}
</Profile>

<style lang="postcss">
	:global(.messages-wrapper) {
		margin-top: 1em;
	}
</style>
