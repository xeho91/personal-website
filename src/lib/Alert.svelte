<script lang="typescript">
	import Icon from "@iconify/svelte";

	import iconWarning from "@iconify-icons/carbon/warning-alt-filled.js";
	import iconError from "@iconify-icons/carbon/error-filled.js";
	import iconInfo from "@iconify-icons/carbon/information-square-filled.js";
	import iconSuccess from "@iconify-icons/carbon/checkmark-filled.js";
	import iconClose from "@iconify-icons/carbon/close-outline.js";

	import { fade } from "svelte/transition";
	import { sineInOut } from "svelte/easing";

	type AlertType = "warning" | "error" | "info" | "success";

	export let type: AlertType;
	export let closeable = true;

	let showAlert = true;

	let icons = {
		warning: iconWarning,
		error: iconError,
		info: iconInfo,
		success: iconSuccess,
	};
</script>

{#if showAlert}
	<div
		class="alert {type}"
		role="alert"
		aria-label={`${type} alert`}
		transition:fade={{ duration: 250, easing: sineInOut }}
	>
		<div class="type-wrapper">
			<Icon icon={icons[type]} />
			<span class="label">{type}:</span>
		</div>
		<span class="message"><slot /></span>

		{#if closeable}
			<button
				on:click={() => (showAlert = false)}
				aria-label="Close alert"
				title="Close alert"
			>
				<Icon icon={iconClose} />
			</button>
		{/if}
	</div>
{/if}

<style lang="postcss">
	.alert {
		--border-radius: 0.5em;
		--color-darkened: hsla(var(--clairvoyant_HSL), 0.25);

		display: grid;
		grid-template-columns: repeat(3, auto);
		gap: 1ch;
		justify-content: space-between;

		border-radius: var(--border-radius);

		@mixin color;

		@mixin background;
		@mixin box-shadow;

		& > .type-wrapper {
			--color-foreground: var(--color-pampas);
			--color-background: var(--color-darkened);

			@mixin flex row {
				place-items: center;
			}

			height: 100%;
			padding-left: 1ch;

			@mixin color;

			@mixin background;
			border-top-left-radius: var(--border-radius);
			border-bottom-left-radius: var(--border-radius);


			& > .label {
				margin: 0 0.5ch;

				font-weight: 700;
				text-transform: capitalize;
			}
		}

		& > .message {
			padding: 0.5em 0;

			& > :global(a) {
				--color-foreground: var(--color-kilamanjaro);
			}
		}

		& > button {
			--color-background: var(--color-darkened);
			--color-foreground: var(--color-pampas);
			--color-shadow: transparent;

			@mixin flex-center row;

			margin: 0;

			border: 0;
			border-left: 2px solid var(--color-darkened);
			border-top-right-radius: var(--border-radius);
			border-bottom-right-radius: var(--border-radius);

			size: 100%;

			@mixin background;

			@media (--motion) {
				transition: all var(--transition);
			}

			&:hover {
				--color-foreground: var(--color_hovered-fg);
				--color-background: var(--color_hovered-bg);
			}
			&:focus {
				--color-foreground: var(--color_focused-fg);
				--color-background: var(--color_focused-bg);
			}
		}
	}
</style>
