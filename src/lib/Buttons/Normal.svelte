<script lang="typescript">
	import Case from "case";

	import Icon from "@iconify/svelte";
	import iconLink from "@iconify-icons/carbon/link.js";

	import type { IconifyIcon } from "$types";

	type ButtonType = "button" | "link";

	export let type: ButtonType = "button";
	export let label: string;
	export let title: string;
	export let icon: IconifyIcon | undefined = undefined;

	export let disabled = false;

	let id = `button_${Case.kebab(label)}`;
</script>

{#if type === "button"}
	<button {id} {disabled} {title}>
		<Icon {icon} inline={true} />
		<span class="button-label">{label}</span>
	</button>
{:else if type === "link"}
	<a {id} href={$$props.href || "#"} class="button" {title}>
		<Icon icon={icon ? icon : iconLink} inline={true} />
		<span class="label">{label}</span>
	</a>
{/if}

<style lang="postcss">
	button,
	.button {
		--button-padding: 0.25em;

		margin: 1ch;
		padding: var(--button-padding) calc(var(--button-padding) * 2);

		white-space: nowrap;

		text-decoration: none;

		border-radius: 1em;

		@media (--motion) {
			transition: all var(--transition);
		}
	}
</style>
