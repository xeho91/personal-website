<!-- routify:options title="Contact" -->

<h1>Get in touch with me</h1>

<form method="POST">
	<fieldset>
		<legend>Required information about you</legend>

		<label for="name">Your name:</label>
		<input
			name="name"
			type="text"
			placeholder="How should I address you?"
			required
		>

		<label for="email">Your email:</label>
		<input
			name="email"
			type="email"
			placeholder="To which address should I reply to you?"
			size=31
			required
		>
	</fieldset>

	<fieldset>
		<legend>Additional information</legend>

		<label for="company">Company:</label>
		<input
			name="company"
			type="text"
			placeholder="Which company do you represent?"
			size=27
		>

		<label for="website">Website:</label>
		<input
			name="website"
			type="url"
			placeholder="Do you have a website?"
			pattern="https://.*"
		>
	</fieldset>

	<label for="message">Your message:</label>
	<textarea
		name="message"
		id=""
		cols="30"
		rows="10"
	>
	</textarea>

	<label for="copy">Send a copy of this message to your email</label>
	<input type="checkbox" name="copy" checked>

	<input type="submit" value="Send an email">
</form>
