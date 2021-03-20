<script>
	// import SvelteInlineSVG from "svelte-inline-svg";
	import IconifyIcon from "@iconify/svelte";

	export let name;
</script>

<IconifyIcon
	icon={name}
	class="icon"
	height="auto"
	inline="{true}"
/>

<style>
	:global(.icon) {
		--icon-size: var(--font-size);


		width: var(--icon-size);
		height: var(--icon-size);
	}
</style>
