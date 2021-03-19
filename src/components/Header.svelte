<script>
	import SocialMedia from "./SocialMedia.svelte";

	import logoFilePath from "@xeho91/logo/build/minified/xeho91-logo.animated.svg";
</script>

<header>
	<nav id="site-navigation">
		<ul>
			<!-- Router.svelte will inject the links here -->
			<slot />
		</ul>
	</nav>

	<img alt="Animated xeho91's logo" src={logoFilePath} />

	<SocialMedia />
</header>

<style>
	header {
		display: grid;
		grid-template-rows: 10em;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;

		/* height: 10; */
	}

	#site-navigation {
		display: flex;
		place-content: center;

		width: 100%;

		& ul {
			display: flex;
			/* justify-content: space-between; */

			padding: 0;
		}
	}

	img {
		height: 100%;
	}
</style>
