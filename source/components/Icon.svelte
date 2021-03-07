<script>
	import SvelteInlineSVG from "svelte-inline-svg";

	export let src;
</script>


<style>
	:global(.icon) {
		--icon-size: 1em;


		width: var(--icon-size);
		height: var(--icon-size);

		fill: currentColor;
	}
</style>


<SvelteInlineSVG src="{src}" class="icon" />
