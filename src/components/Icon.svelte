<script>
	import SvelteInlineSVG from "svelte-inline-svg";

	export let src;
</script>

<SvelteInlineSVG {src} class="icon" />

<style>
	:global(.icon) {
		--icon-size: var(--font-size);


		width: var(--icon-size);
		height: var(--icon-size);

		fill: currentColor;
	}
</style>
