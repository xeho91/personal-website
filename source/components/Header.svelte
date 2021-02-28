<script>
	import logoFilePath from "@xeho91/logo/build/minified/xeho91-logo.animated.svg";

	import SiteNavigation from "./SiteNavigation.svelte";
	import SocialMedia from "./SocialMedia.svelte";
</script>

<style>
	header {
		display: grid;
		grid-template-rows: 10em;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;

		height: 10em;
	}

	img {
		height: 100%;
	}
</style>

<header>
	<SiteNavigation />

	<img alt="Animated xeho91's logo" src="{ logoFilePath }" />

	<SocialMedia />
</header>
