<script>
	export let cite;
</script>

<blockquote cite="{cite}">
	<slot />
</blockquote>

<style>
	blockquote {
		--color-background: var(--color-terracotta);

		position: relative;

		width: fit-content;
		padding: 0.25em 1em;

		font-style: italic;

		background: var(--color-background);
		border-radius: 1em;

		&::before,
		&::after {
			position: absolute;

			font-size: 2em;
		}
		&::before {
			bottom: 0;
			left: -0.5ch;

			content: "\1F678";
		}
		&::after {
			top: 0;
			right: -0.25ch;

			content: "\1F677";
		}
	}
</style>
