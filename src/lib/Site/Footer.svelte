<script lang="typescript">
	import { SITE_METADATA } from "$data/site";

	import Icon from "@iconify/svelte";
	import iconGitHub from "@iconify-icons/simple-icons/github.js";
	import iconSvelte from "@iconify-icons/simple-icons/svelte.js";
</script>

<footer id="site-footer">
	<p>
		<span>I built this website with
			<a href="https://svelte.dev/" title="Visit Svelte's official website">
				<Icon icon={iconSvelte} inline={true} />
				<span class="label">Svelte</span></a>.
		</span>

		<span>You can preview the source code on
			<a href={SITE_METADATA.sourceCode} title="View this website project repository on the GitHub">
				<Icon icon={iconGitHub} inline={true} />
				<span class="label">GitHub</span></a>.
		</span>
	</p>
</footer>

<style lang="postcss">
	#site-footer {
		--color-background: var(--color-terracotta);
		--color-foreground: var(--color-clairvoyant);

		grid-area: footer;

		padding: 1em var(--content-padding);

		@mixin background;
		@mixin box-shadow;

		& > p {
			@mixin flex-center row {
				flex-wrap: wrap;
			}

			height: 100%;
			margin: 0;

			@mixin color;
			font-size: clamp(0.5em, 0.565em + 1vw, 1em);
			text-align: center;

			user-select: none;

			& > :first-of-type {
				padding-right: 0.5ch;
			}

			& a:focus,
			& a:hover {
				--color-background: var(--color-clairvoyant);
			}
			& a:not(:focus):not(:hover) {
				--color-foreground: var(--color-kilamanjaro);
			}

			& > span {
				display: block;
			}
		}
	}
</style>

