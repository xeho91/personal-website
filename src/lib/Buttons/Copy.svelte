<script lang="typescript">
	import Icon from "@iconify/svelte";
	import iconCopy from "@iconify-icons/carbon/copy.js";

	import { getNotificationsContext } from "svelte-notifications";

	const { addNotification } = getNotificationsContext();

	export let title: string;
	export let contentId: string;

	function handleClick() {
		const element = document.getElementById(contentId);

		if (element) {
			const contentToCopy = element.innerText;

			navigator.clipboard.writeText(contentToCopy);

			addNotification({
				type: "success",
				position: "top-right",
				text: "Copied to clipboard!",
				removeAfter: 3000,
			});
		}
	}
</script>

<button {title} on:click={handleClick}>
	<Icon icon={iconCopy} size="100%" inline={true} class="icon" />
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
