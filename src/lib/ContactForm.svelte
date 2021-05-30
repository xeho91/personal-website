<script lang="typescript">
	import { onMount } from "svelte";

	import Alert from "$lib/Alert.svelte";
	import Fieldset from "$lib/Input/Fieldset.svelte";
	import TextInput from "$lib/Input/Text.svelte";
	import Radio from "$lib/Input/Radio.svelte";
	import SubmitButton from "$lib/Input/Submit.svelte";
	import Textarea from "$lib/Input/Textarea.svelte";

	let isJSdisabled = true;

	onMount(() => {
		isJSdisabled = false;
	});
</script>

<noscript>
	<Alert type="error" heading="JavaScript disabled">
		<p><strong>This form requires JavaScript to be enabled.</strong></p>
		<p>
			The contact form uses a back-end API for sending the email, which uses
			<a href="https://github.com/nodemailer/nodemailer">nodemailer</a>
			and <a href="https://sendgrid.com/">SendGrid</a> to send the emails.
		</p>
		<p>
			I am working on making my website non-JavaScript friendly,
			and I am not here yet. Give me a time.
		</p>
	</Alert>
</noscript>

<form id="form_contact-me" method="POST" on:submit>
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

		<Textarea
			editor
			label="Message"
			placeholder="How can I help you?"
			required
		/>

		<Radio
			label="Send a copy of this message to your email?"
			values={["Yes", "No"]}
			checked="Yes"
		/>
	</Fieldset>

		<SubmitButton label="Send a message" disabled={isJSdisabled} />
</form>

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
</style>
