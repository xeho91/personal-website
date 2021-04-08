<script>
	import { Router } from "@roxi/routify";
	import { routes } from "../.routify/routes.js";
</script>

<Router {routes} />

<style>
	@charset "UTF-8";
	/*
	 * FIXME:
	 * * !For some reason, Vite or Rollup removes the @custom-media queries,
	 *   the  during building for production
	 */
	@custom-media --tablet screen and (width <= var(--tablet));
	@custom-media --desktop screen and (width > var(--tablet));
	@custom-media --motion (prefers-reduced-motion: no-preference);
	@custom-media --no-motion (prefers-reduced-motion: reduce);

	@import "$styles/global.css";
</style>
