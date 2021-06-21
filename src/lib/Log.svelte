<script lang="typescript">
	import type { FeedbackType } from "$types";

	export let type: FeedbackType = "normal";
</script>

<span class="log-line">
	{#if type !== "normal"}
		<span class="prefix {type}">{type}: </span>
	{/if}
	<span class="text {type}"><slot /></span>
</span>

<style lang="postcss">
	.log-line {
		@mixin color;

		& > .prefix {
			padding: 0 0.5ch;

			font-weight: var(--font-weight_bolder);
			text-transform: uppercase;

			@mixin background;
		}

		& > .log:not(.normal) {
			--color-foreground: var(--color-background);
		}
	}
</style>
