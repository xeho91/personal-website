<script>
	import pathFavicon from "@xeho91/avatar";
	import pathFontMonospace from "@xeho91/fonts/build/monospace/FiraCode.woff2";
	import pathFontSansSerif from "@xeho91/fonts/build/sans-serif/WorkSans.woff2";
	import pathFontSerif from "@xeho91/fonts/build/serif/Fraunces.woff2";

	import { Router, Route } from "svelte-routing";

	// Routes
	import Home from "$routes/Home.svelte";
	import AboutMe from "$routes/About-me.svelte";

	export let url = "";

	// Components
	import Header from "$components/Header.svelte";
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={pathFavicon} />
	<link
		rel="preload"
		href={pathFontMonospace}
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href={pathFontSansSerif}
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href={pathFontSerif}
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

<Router url="{url}">
	<Header />

	<main>
		<Route path="/" component="{Home}" />
		<Route path="about-me" component="{AboutMe}" />
	</main>
</Router>

