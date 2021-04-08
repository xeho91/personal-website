<script>
	import Icon from "$lib/Icon.svelte";

	import iconWarning from "@iconify-icons/carbon/warning-alt-filled.js";
	import iconError from "@iconify-icons/carbon/error-filled.js";
	import iconInfo from "@iconify-icons/carbon/information-square-filled.js";
	import iconSuccess from "@iconify-icons/carbon/checkmark-filled.js";

	import iconClose from "@iconify-icons/carbon/close-outline.js";

	import { fade } from "svelte/transition";
	import { sineInOut } from 'svelte/easing';

	export let type;

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
		aria-label="{`${type} alert`}"
		transition:fade="{{ duration: 250, easing: sineInOut }}"
	>
		<div class="type-wrapper">
			<Icon data={icons[type]} />
			<span class="label">{type}:</span>
		</div>
		<span class="message"><slot /></span>
		<button on:click={() => showAlert = false} aria-label="Remove alert">
			<Icon data={iconClose} />
		</button>
	</div>
{/if}

<style>
	.alert {
		--border-radius: 0.5em;
		--color-darkened: hsla(var(--clairvoyant_HSL), 0.25);

		position: absolute;
		left: 50%;

		display: grid;
		grid-template-columns: auto auto auto;
		place-content: center;
		place-items: center;

		width: fit-content;
		margin: 0 auto;

		color: var(--color-content);

		column-gap: 0.5ch;

		background-color: var(--color-background);
		border-radius: var(--border-radius);
		box-shadow: var(--box-shadow);

		transform: translateX(-50%);

		& > .type-wrapper {
			display: flex;
			place-items: center;

			height: 100%;
			padding-left: 1ch;

			background-color: var(--color-darkened);
			border-top-left-radius: var(--border-radius);
			border-bottom-left-radius: var(--border-radius);

			& > .label {
				margin: 0 0.5ch;

				font-weight: bolder;
				text-transform: capitalize;
			}
		}

		& > .message {
			padding: 0.5em 0;
		}

		& > button {
			--shadow-color: transparent;

			display: flex;
			place-content: center;
			place-items: center;

			width: 100%;
			height: 100%;

			margin: 0 1ch;
			padding: 0;

			color: var(--color-content);

			background-color: var(--color-background);
			border: 0;
			border-left: 2px solid var(--color-darkened);
			border-top-right-radius: var(--border-radius);
			border-bottom-right-radius: var(--border-radius);
			box-shadow: var(--shadow-position) var(--shadow-color);

			@media (--motion) {
				transition: all var(--transition);
			}

			&:--hoverfocus {
				--color-background: var(--color-darkened);
				/* --color-content: var(--color-calico); */
				--shadow-color: var(--color-background);
			}
		}
	}
</style>
