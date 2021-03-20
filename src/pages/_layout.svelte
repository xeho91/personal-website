<script>
	import Header from "$components/SiteHeader.svelte";

	import pathFavicon from "@xeho91/avatar";

	import pathFontMonospace from "@xeho91/fonts/build/monospace/FiraCode.woff2?url";
	import pathFontSansSerif from "@xeho91/fonts/build/sans-serif/WorkSans.woff2?url";
	import pathFontSerif from "@xeho91/fonts/build/serif/Fraunces.woff2?url";
</script>

<svelte:head>
	Favicon
	<link rel="icon" type="image/svg+xml" href={pathFavicon}>

	Fonts
	<link
		rel="preload"
		as="font"
		type="font/woff2"
		href={pathFontSansSerif}
		crossorigin="anonymous"
	>
	<link
		rel="preload"
		as="font"
		type="font/woff2"
		href={pathFontSerif}
		crossorigin="anonymous"
	>
	<link
		rel="font"
		type="font/woff2"
		href={pathFontMonospace}
	>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<style global>
	@import "$styles/global.css";
</style>
