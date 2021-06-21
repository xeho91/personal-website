<script lang="typescript">
	import Icon from "@iconify/svelte";
	import iconClose from "@iconify-icons/carbon/close-outline.js";

	export let title: string;
</script>

<button {title} on:click>
	<Icon icon={iconClose} size="100%" inline={true} class="icon" />
</button>

<style lang="postcss">
	button {
		--button-margin: 0;
		--button-padding: 0;
		--color-foreground: var(--color_brighter-bg);
		--color-background: transparent;
		--color-shadow: none;

		&:hover {
			--color-foreground: var(--color_hovered-bg);
			--color-background: transparent;
		}
		&:focus {
			--color-foreground: var(--color_focused-bg);
			--color-background: transparent;
		}
	}
</style>
