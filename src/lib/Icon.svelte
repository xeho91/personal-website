<script>
	// https://github.com/iconify/iconify/tree/master/packages/svelte
	import IconifyIcon from "@iconify/svelte";
	import { onMount } from "svelte";

	export let data;

	onMount(async() => {
		if (data instanceof Promise) {
			try {
				data = (await data)?.default;
			} catch (error) {
				console.error("Something went wrong with loading the icon module.");
			}
		}
	});
</script>

<IconifyIcon
	icon={data}
	class="icon"
	width="auto"
	height="auto"
	inline="{true}"
/>

<style>
	:global(.icon) {
		--icon-size: 1em;

		width: var(--icon-size);
		height: var(--icon-size);
	}
</style>
