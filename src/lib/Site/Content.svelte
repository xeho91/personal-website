<script lang="typescript">
	import { onMount } from "svelte";

	import Notifications from "svelte-notifications";
	import CustomNotification from "$lib/Notification.svelte";

	import Alert from "$lib/Alert.svelte";
	import Map from "$lib/Map.svelte";


	let renderMap = false;

	/** Render map if there's a Flag element in the content */
	onMount(() => {
		renderMap = document.body.querySelector(".flag") ? true : false;
	});
</script>

<Notifications item={CustomNotification}>
	<main id="site-content">
		<noscript>
			<Alert type="warning" heading="JavaScript disabled">
				Without JavaScript enabled, some parts of the website may not
				work properly.
			</Alert>
		</noscript>

		{#if renderMap}
			<Map />
		{/if}

		<slot />
	</main>
</Notifications>

<style lang="postcss">
	#site-content {
		--gap: 1.5em;

		position: relative;

		grid-area: content;

		min-height: calc(100vh - var(--header-height));

		padding: 1em var(--content-padding);

		@mixin flex-center-y column {
			gap: var(--gap);
			place-content: flex-start;
		}

		& > :global(:last-child) {
			margin-bottom: 3em;
		}
	}
	:--no-flex-gap #site-content :--owl {
		margin-top: var(--gap);
	}
</style>
