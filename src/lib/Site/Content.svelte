<script lang="typescript">
	import { onMount } from "svelte";

	import Alert from "$lib/Alert.svelte";
	import Map from "$lib/Map.svelte";

	let isMapRendered = false;

	/** Render map if there's a Flag element in the content */
	onMount(() => {
		isMapRendered = document.body.querySelector(".flag") ? true : false;
	});
</script>

<main id="site-content">
	<noscript>
		<Alert type="info" closeable={false}>
			Without JavaScript enabled, some parts of the website may not work properly.
		</Alert>
	</noscript>

	{#if !isMapRendered}
		<Map />
	{/if}

	<slot />
</main>

<style lang="postcss">
	#site-content {
		--gap: 1.5em;

		grid-area: content;

		position: relative;

		min-height: calc(100vh - var(--header-height));

		@mixin flex-center-y column {
			gap: var(--gap);
			place-content: flex-start;
		}

		padding: 1em var(--content-padding);

		& > :global(:last-child) {
			margin-bottom: 3em;
		}
	}
	:--no-flex-gap #site-content :--owl {
		margin-top: var(--gap);
	}
</style>
