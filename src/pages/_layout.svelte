<script>
	import SiteHeader from "$lib/Site/Header.svelte";
	import SiteContent from "$lib/Site/Content.svelte";
	import SiteFooter from "$lib/Site/Footer.svelte";

	import Alert from "$lib/Alert.svelte";

	import { page, metatags } from "@roxi/routify";
	import { site_metadata } from "$data/site.js";

	$: metatags.title = `${site_metadata.name} | ${$page.title}`;
</script>

<SiteHeader />
<SiteContent>
	<Alert type="warning">
		This website is under development and not ready yet.
	</Alert>
	<slot />
</SiteContent>
<SiteFooter />

<style>
	:global(#svelte) {
		--header-height: 5em;
		--content-padding: 2.5vh;
		--site-shadow: 0 0 1em 0.5em hsla(var(--kilamanjaro_HSL), 0.75);
		--color-background: var(--color-clairvoyant);
		--color-content: var(--color-terracotta);

		position: relative;

		display: grid;
		grid-template-areas:
			"header"
			"content"
			"footer";
		grid-template-rows:
			auto
			calc(100vh - var(--header-height))
			auto;
		grid-template-columns: 1fr;
		place-content: flex-start center;

		max-width: var(--tablet-width);
		margin: 0 auto;
	}
</style>
