<script lang="typescript">
	export let cite: string;
</script>

<blockquote {cite}>
	<slot />
</blockquote>

<style lang="postcss">
	blockquote {
		--color-background: var(--color-terracotta);
		--blockquote-padding: 1em;

		position: relative;

		width: fit-content;
		padding: calc(var(--blockquote-padding) / 2) var(--blockquote-padding);

		font-style: italic;

		@mixin background;
		border-radius: var(--blockqoute-padding);

		&::before,
		&::after {
			position: absolute;

			font-size: larger;
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
