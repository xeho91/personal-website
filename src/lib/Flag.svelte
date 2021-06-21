<script lang="typescript">
	// https://github.com/iconify/iconify/tree/master/packages/svelte
	import Icon from "@iconify/svelte";

	import { map } from "$stores";
	import type { IconifyIcon } from "$types";

	export let icon: IconifyIcon;
	export let name: string;

	/** Show map in the DOM */
	function handleClick() {
		$map.hidden = false;
		$map.showCountry = name;
	}
</script>

<span class="country" on:click={handleClick} title="Show on map">
	<Icon
		{icon}
		class="flag"
		width="1em"
		height="1em"
		inline={true}
	/>{name}
</span>

<!--
	TODO:
	Create a hover element which will display a map, with selected country
 -->
<style lang="postcss">
	.country {
		white-space: nowrap;
		text-decoration: underline;
		text-decoration-style: dotted;
		text-underline-offset: 0.1em;

		& > :global(.flag) {
			margin-right: 0.25em;
		}
	}
</style>
