<script>
	import Link from "$lib/Link.svelte";
	import Icon from "$lib/Icon.svelte";

	import iconGitHub from "@iconify-icons/simple-icons/github.js";
	import iconSvelte from "@iconify-icons/simple-icons/svelte.js";

	import { SITE_METADATA } from "$data/site.js";
</script>

<footer id="site-footer">
	<p>
		<span>I built this website with
			<Link
				href="https://svelte.dev/"
				tooltip="Learn more about Svelte"
				place="top"
			>
			<Icon data="{iconSvelte}" />
			<span class="label">Svelte</span>
		</Link>.
		</span>

		<span>You can preview the source code on
			<Link
				href="{SITE_METADATA.sourceCode}"
				tooltip="Go to the repository"
				place="top"
			>
				<Icon data="{iconGitHub}" />
				<span class="label">GitHub</span>
			</Link>.
		</span>
	</p>
</footer>

<style>
	#site-footer {
		--color-background: var(--color-terracotta);
		--color-content: var(--color-clairvoyant);
		--color-link: var(--color-kilamanjaro);

		z-index: 1;

		grid-area: footer;

		padding: 1em var(--content-padding);

		background-color: var(--color-background);
		box-shadow: var(--site-shadow);

		& > p {
			display: flex;
			flex-direction: row;
			place-content: center;
			flex-wrap: wrap;

			height: 100%;
			margin: 0;

			color: var(--color-content);
			font-size: clamp(0.5em, 0.565em + 1vw, 1em);
			text-align: center;

			user-select: none;

			& > span {
				&:first-of-type {
					padding-right: 0.5ch;
				}

				& > :global(a) {
					color: var(--color-link);
				}
			}
		}
	}
</style>
