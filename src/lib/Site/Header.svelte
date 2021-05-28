<script>
	import SiteLogo from "$lib/Site/Logo.svelte";
	import Connect from "$lib/Connect.svelte";
</script>

<header id="site-header">
	<SiteLogo />
	<Connect />
</header>

<style lang="postcss">
	#site-header {
		grid-area: header;

		@mixin top sticky {
			left: 0;
			z-index: 1;
		}

		display: grid;
		grid-template-areas: "navigation logo connect";
		grid-template-rows: var(--header-height);
		grid-template-columns: repeat(3, 1fr);
		align-items: center;

		padding: 0 var(--content-padding);

		@mixin background;
		@mixin box-shadow;
	}
</style>
