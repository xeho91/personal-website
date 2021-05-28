<script lang="typescript">
	import Alert from "$lib/Alert.svelte";
	import Fieldset from "$lib/Input/Fieldset.svelte";
	import TextInput from "$lib/Input/Text.svelte";
	import Radio from "$lib/Input/Radio.svelte";
	import SubmitButton from "$lib/Input/Submit.svelte";
	import Textarea from "$lib/Input/Textarea.svelte";
	import Profile from "$lib/Profile.svelte";
	import Message from "$lib/Message.svelte";

	let formSubmitted = false;
	let request: Promise<Response>;

	async function handleSubmit(event: Event) {
		event.preventDefault();

		formSubmitted = true;

		const form = document.getElementById("form_contact-me") as HTMLFormElement;
		const data = new FormData(form);
		let wrappedData = {};

		data.forEach((value, key) => {
			Object.assign(wrappedData, { [key]: value });
		});

		request = fetch("/api/email", {
			method: "post",
			body: JSON.stringify(wrappedData),
		});
	}
</script>

<h1>Get in touch with&nbsp;me</h1>

<noscript>
	<Alert type="warning" closeable={false}>
		This part of the website requires JavaScript to be enabled.<br />
		The contact form uses a back-end API for sending the email,
		it uses <a href="https://github.com/nodemailer/nodemailer">nodemailer</a>.
	</Alert>
</noscript>

{#if !formSubmitted}
	<form id="form_contact-me" method="post" on:submit={handleSubmit}>
		<Fieldset legend="Required information about you" required>
			<TextInput
				type="text"
				label="First name"
				placeholder="How should I address you?"
				size={20}
				pattern="^[\w -]+"
				title="Include only basic latin characters"
				required
				autocomplete="given-name"
				autocapitalize="words"
				spellcheck
			/>

			<TextInput
				type="email"
				label="Email"
				placeholder="To which email address should I reply to you?"
				size={35}
				required
			/>
		</Fieldset>

		<Fieldset legend="Additional info about what you do">
			<TextInput
				label="Organization"
				spellcheck={false}
				autocomplete="organization"
				placeholder="Which organization do you represent?"
				size={25}
			/>

			<TextInput
				type="url"
				label="Website"
				placeholder="Do you have a website or a social media profile?"
				title="The link must start with a 'https://'"
				size={40}
			/>
		</Fieldset>

		<Fieldset legend="Your message" required>
			<TextInput
				label="Subject"
				placeholder="What's the subject of this message?"
				minlength={10}
				maxlength={50}
				title="At least 10 characters (basic latin)"
				size={53}
			/>

			<Textarea editor label="Message" placeholder="How can I help you?" required />

			<Radio
				label="Send a copy of this message to your email?"
				values={["Yes", "No"]}
				checked="Yes"
			/>
		</Fieldset>

		<SubmitButton
			label="Send a message"
			disabled={formSubmitted}
		/>
	</form>
{/if}

<Profile>
	<Message>
		{#if !formSubmitted}
			As I pledged to respect your privacy rights,
			<strong>I do not store your data</strong>.<br />
			The information filled in the form is purely just for contact purpose.
			For this reason, I only need your email to be able to reply to you.
		{:else}
			{#await request}
				<p>Hold on, the server is sending an email...</p>
			{:then response}
				{#await response.text() then message}
					<p><strong>{message}</strong></p>

					<p>
						Thank you for reaching out.<br />
						I check my email inbox frequently.
						I will do my best to respond to you within 36 hours.<br />
						I appreciate your patience in advance.
					</p>
				{/await}
			{:catch error}
				<p>{error}</p>
			{/await}
		{/if}
	</Message>

</Profile>

<style lang="postcss">
	form {
		--gap: 1em;

		@mixin flex-center column {
			gap: var(--gap);
		}

		width: 80ch;
		max-width: 100%;
	}
	:--no-flex-gap form :--owl {
		margin-top: var(--gap);
	}

	:global(.messages-wrapper) {
		margin-top: 1em;
	}
</style>
