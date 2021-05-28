<script>
	/*
	 * TODO: Improve accessibility on logo repo, its missing title and desc
	 */
</script>

<a href="/" tabindex="-1">
	<div id="site-logo" role="img" aria-label="xeho91's logo" />
</a>

<style>
	a {
		grid-area: logo;
		justify-self: center;

		width: calc(var(--header-height) * var(--golden-ratio));
		height: var(--header-height);
	}

	#site-logo {
		size: 100%;

		background-repeat: no-repeat;
		background-position: center;
		background-size: auto 100%;

		cursor: pointer;

		pointer-events: none;

		@media (--motion) {
			background-image: url("/images/logo.animated.svg");
		}
		@media (--no-motion) {
			background-image: url("/images/logo.svg");
		}
	}
</style>
