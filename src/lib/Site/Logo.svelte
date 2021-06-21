<script lang="typescript">
	import { Logo } from "@xeho91/assets";
</script>

<a id="site-logo" href="/" tabindex="-1">
	<Logo background="none" animation={{ duration: 3000 }} />
</a>

<style lang="postcss">
	a {
		/* width: calc(var(--header-height) * var(--golden-ratio)); */
		/* height: var(--header-height); */
	}

	#site-logo {
		grid-area: logo;

		@mixin flex-center row;

		height: 100%;

		cursor: pointer;

		& > :global(svg) {
			height: 100%;
		}
	}
</style>
