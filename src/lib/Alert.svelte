<script lang="typescript">
	import Icon from "@iconify/svelte";
	import getFeedbackIcon from "$scripts/getFeedbackIcon";

	import ButtonClose from "$lib/Button/Close.svelte";

	import { onMount } from "svelte";

	import { fade } from "svelte/transition";
	import { sineInOut } from "svelte/easing";

	import type { FeedbackType } from "$types/Feedback";

	export let type: FeedbackType;
	export let heading = "";
	export let closeable = false;
	export let onClose: null | (() => void) = null;

	let isJSenabled = false;
	let icon = getFeedbackIcon(type);

	/** Make it closeable only when JavaScript is enabled */
	onMount(() => {
		isJSenabled = true;
		closeable = isJSenabled;
	});

	/** Close the alert, with callback (onClose) if provided */
	function handleClick() {
		if (onClose) onClose();

		showAlert = false;
	}

	let showAlert = true;
</script>

{#if showAlert}
	<div
		class="alert {type}"
		role="alert"
		aria-live="assertive"
		aria-label="{type} alert"
		transition:fade={{ duration: 250, easing: sineInOut }}
	>
		<div class="toolbar">
			<p class="title">
				<Icon {icon} inline={true} />
				<span class="label">{type}</span>
				{#if heading}
					<span class="heading">: {heading}</span>
				{/if}
			</p>

			{#if closeable}
				<ButtonClose title="Close alert" on:click={handleClick} />
			{/if}
		</div>

		<div class="message"><slot /></div>
	</div>
{/if}

<style lang="postcss">
	.alert {
		--alert-padding: 1ch;
		--gap: 1ch;

		gap: var(--gap);
		justify-content: space-between;

		border-radius: var(--alert-padding);

		@mixin color;

		@mixin background;
		@mixin box-shadow;

		& :global(p) {
			margin: 0;
		}
	}

	.toolbar {
		--color-background: var(--color-darkened);

		@mixin flex-center-y row {
			justify-content: space-between;
		}

		padding: 0.5em var(--alert-padding);

		@mixin background;
	}

	.title {
		font-weight: var(--font-weight_bolder);
		font-size: larger;

		& > .label {
			text-transform: capitalize;
		}
	}

	.message {
		padding: var(--alert-padding);

		& > :global(*:not(:last-of-type)) {
			margin-bottom: 1ch;
		}
	}
</style>
