<script>
	import SiteNavigation from "$lib/Site/Navigation.svelte";
	import SiteLogo from "$lib/Site/Logo.svelte";
	import SocialMediaNav from "$lib/SocialMediaNav.svelte";
</script>

<header id="site-header">
	<SiteNavigation />
	<SiteLogo />
	<SocialMediaNav />
</header>

<style>
	#site-header {
		position: sticky;
		top: 0;
		left: 0;
		z-index: 1;

		display: grid;
		grid-area: header;
		grid-template-areas: "navigation logo social-media";
		grid-template-rows: var(--header-height);
		grid-template-columns: auto 1fr auto;
		align-items: center;

		padding: 0 var(--content-padding);

		background-color: var(--color-background);
		box-shadow: var(--site-shadow);
	}
</style>
