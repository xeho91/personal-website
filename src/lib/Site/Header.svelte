<script>
	import { Connect } from "$lib";
	import Logo from "./Logo.svelte";
</script>

<header id="site-header">
	<Logo />
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
