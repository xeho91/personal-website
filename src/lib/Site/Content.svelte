<script>
	import { expandedNavs } from "$data/stores.js";

	let lastContentScrollTop = 0;

	function handleScrolling({ target }) {
		if (document.body.scrollTop > 0 && lastContentScrollTop > target.scrollTop) {
			document.body.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}

		lastContentScrollTop = target.scrollTop;
	}
</script>

<main
	id="site-content"
	on:scroll={handleScrolling}
	aria-hidden="{$expandedNavs["site-navigation"]}"
	hidden="{$expandedNavs["site-navigation"]}"
>
	<slot />
</main>

<style>
	#site-content {
		--color-background: var(--color-calico);
		--color-content: var(--color-clairvoyant);
		--color-link: var(--color-kilamanjaro);

		position: relative;

		grid-area: content;

		padding: 1em var(--content-padding);

		overflow-x: hidden;
		overflow-y: scroll;

		color: var(--color-content);

		background-color: var(--color-background);
		box-shadow: var(--site-shadow);

		& > :global(section) {
			max-width: 80ch;

			&:last-of-type {
				margin-bottom: 3em;
			}
		}

		& :global(h1) {
			text-align: center;
		}

		/*
		* TODO: Make headings sticking when scrolling
		*/
		/* & :global(:--headings) {
			position: sticky;
			top: 0;

			background-color: var(--color-background);
			box-shadow: 0 0 1em 2em
		} */
	}
</style>
