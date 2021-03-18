<script>
	import SvelteInlineSVG from "svelte-inline-svg";

	export let src;
</script>


<style>
	:global(.icon) {
		--icon-size: var(--font-size);


		width: var(--icon-size);
		height: var(--icon-size);

		fill: currentColor;
	}
</style>


<SvelteInlineSVG src="{src}" class="icon" />
