<script>
	// https://github.com/iconify/iconify/tree/master/packages/svelte
	import IconifyIcon from "@iconify/svelte";
	import { onMount } from "svelte";

	import { mapVisible, mapShowCountry } from "$data/stores.js";

	export let data;
	export let name;

	function showMap() {
		mapVisible.set(true);
		mapShowCountry.set(name);
	}

	onMount(async() => {
		if (data instanceof Promise) {
			try {
				data = (await data)?.default;
			} catch (error) {
				console.error(error);
			}
		}

	});
</script>

<span class="country" on:click={showMap}>
	<IconifyIcon
		icon={data}
		class="flag"
		width="1em"
		height="1em"
		inline="{true}"
	/>{name}</span>


<style>
	span {
		text-decoration: underline;
		text-decoration-style: dotted;
	}
</style>
<!--
	TODO:
	Create a hover element which will display a map, with selected country
 -->

