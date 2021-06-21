<script lang="typescript">
	import Case from "case";
	import Icon from "@iconify/svelte";

	import type { IconifyIcon } from "$types";

	type ButtonType = "link" | "button";
	type LabelPosition = "right" | "left" | "hidden";

	export let type: ButtonType = "button";
	export let icon: IconifyIcon;
	export let label: string;
	export let title: string;
	export let label_position: LabelPosition = "right";
	export let size = "2.5em";

	let id = $$props.id || `button_${Case.kebab(label)}`;

	let buttonSize = `--button-size: ${size}`;
</script>

{#if type === "button"}
	<button {id} {title} on:click style={buttonSize}>
		{#if icon}
			<Icon class="icon" {icon} />
		{/if}
		<span class="label {label_position}">{label}</span>
	</button>
{:else if type === "link"}
	<a href={$$props.href} {id} {title} class="button" style={buttonSize}>
		{#if icon}
			<Icon class="icon" {icon} />
		{/if}
		<span class="label {label_position}" style={buttonSize}>{label}</span>
	</a>
{/if}

<style lang="postcss">
	button,
	.button {
		position: relative;

		@mixin flex-center row;

		@mixin circle var(--button-size);
		@mixin color;

		@mixin background;
		@mixin border;
		@mixin box-shadow;

		& > :global(.icon) {
			size: 100%;

			pointer-events: none;
		}

		& > .label {
			--label-margin: 1ch;
			--label-padding: 0.5em;
			--color-foreground: var(--color_action-bg);
			--color-background: transparent;

			@mixin center-y absolute;

			margin: 0 var(--label-margin);
			padding: calc(var(--label-padding) / 2) var(--label-padding);

			@mixin color;
			white-space: nowrap;

			@mixin background;
			border-radius: calc(var(--label-padding) * 2);

			pointer-events: none;

			@media (--motion) {
				transition: all var(--transition);
			}

			&.left {
				right: 100%;
			}
			&.right {
				left: 100%;
			}
			&.hidden {
				opacity: 0;
			}
		}
		&:hover > .label {
			--color-foreground: var(--color_hovered-bg);
		}
		&:focus > .label {
			--color-foreground: var(--color_focused-bg);
		}
	}
</style>
