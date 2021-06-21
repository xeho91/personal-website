<script lang="typescript">
	import Icon from "@iconify/svelte";
	import { Close as ButtonClose } from "$lib/Buttons";

	import { fade } from "svelte/transition";
	import { sineInOut } from "svelte/easing";
	import { getFeedbackIcon } from "$utils";

	import type { Notification } from "$types";

	export let notification: Notification;
	export let onRemove: null | (() => void) = null;

	let { type, text } = notification;
	type = type ? type : "normal";
	let icon = getFeedbackIcon(type);

	/** Close notification on Escape key and provide callback */
	function handleKeydown({ key }: KeyboardEvent) {
		if (key === "Escape") {
			if (onRemove) onRemove();
		}
	}

	/** Close notification with callback provided */
	function handleClick() {
		if (onRemove) onRemove();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	class="notification {type}"
	role="status"
	aria-live="polite"
	aria-label="{type} notification"
	transition:fade={{ duration: 250, easing: sineInOut }}
>
	<div class="type-icon">
		<Icon {icon} inline={true} class="icon" />
	</div>
	<p class="text">{text}</p>
	<ButtonClose title="Close notification" on:click={handleClick} />
</div>

<style lang="postcss">
	:global(.position-top-left),
	:global(.position-top-center),
	:global(.position-top-right) {
		top: calc(var(--header-height) + 1em) !important;
	}

	.notification {
		--notification-margin: 0.5em;
		--notification-padding: 0.5ch;

		@mixin flex-center-y row {
			place-content: space-between;
		}

		margin: var(--notification-margin);

		@mixin color;

		@mixin background;
		border-radius: var(--notification-padding);
		@mixin box-shadow;

		user-select: none;

		& > .type-icon {
			--color-background: var(--color-darkened);

			@mixin flex-center row;

			size: calc((var(--notification-padding) * 4) + 1em);

			@mixin background;
		}

		& > .text {
			margin: 0;
			padding: var(--notification-padding);
		}

		& > :global(button) {
			padding: 0 var(--notification-padding);

			border-left:
				var(--border-width)
				var(--border-style)
				var(--color-darkened);
			border-radius: 0;
		}
	}
</style>
