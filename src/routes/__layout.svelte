<script lang="typescript">
	import { onMount } from "svelte";
	import { checkFlexGap } from "$utils";

	import { Header, Content, Footer } from "$lib/Site";

	onMount(() => {
		if (!checkFlexGap()) {
			document.body.classList.add("no-flex-gap");
		}
	});
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/images/favicon.svg">

	<link rel="preload" as="font" type="font/woff2" href="/fonts/serif/Fraunces.woff2" crossorigin="anonymous">
	<link rel="preload" as="font" type="font/woff2" href="/fonts/sans-serif/WorkSans.woff2" crossorigin="anonymous">
</svelte:head>

<Header />
<Content><slot /></Content>
<Footer />

<style lang="postcss">
	@import "$styles/global.css";

	/*
		FIXME:
		For some reason, while building process (`npm run build`),
		custom-media queries defined in `global.css`
		are ignored in compiling Svelte components.
		They work only inside the global.css file (along with imports).
		Meanwhile, in the dev process (`npm run dev`), it works. 🤯
		Intended or bug?
	*/
	@custom-media --motion (prefers-reduced-motion: no-preference);
	@custom-media --no-motion (prefers-reduced-motion: reduce);

	/* FIXME: Remove it when Safari starts to support Flex gap on older browsers */
	@custom-selector :--no-flex-gap :global(.no-flex-gap);
	@custom-selector :--owl :global(> * + *);

	:global(#svelte) {
		--header-height: 5em;

		--content-padding: min(2.5vw, 1em);

		position: relative;

		display: grid;
		grid-template-areas:
			"header"
			"content"
			"footer";
		grid-template-rows:
			var(--header-height)
			calc(100% - var(--header-height))
			auto;
		grid-template-columns: 100vw;
	}
</style>
