<script>
	import Icon from "$lib/Icon.svelte";

	export let tag = "button";
	export let icon;
	export let label;
	export let label_position = "right";
</script>

{#if tag === "button"}
	<button
		id="{$$props.id}"
		on:mouseover
		on:mouseleave
		on:click
	>
		<Icon data={icon} />
		<span class="label {label_position}">{label}</span>
	</button>
{:else if tag === "link"}
	<a href="{$$props.href}">
		<Icon data={icon} />
		<span class="label {label_position}">{label}</span>
	</a>
{/if}

<style>
	button,
	a {
		--color-background: var(--color-kilamanjaro);
		--color-content: var(--color-calico);
		--color-shadow: transparent;
		--box-shadow: 0 0 0.35em 0.15em;

		position: relative;

		width: 2em;
		height: 2em;

		color: var(--color-content);

		background-color: var(--color-background);
		border: 1px solid var(--color-content);
		border-radius: 50%;
		box-shadow: var(--box-shadow) var(--color-shadow);

		& > :global(.icon) {
			--icon-size: 100%;
		}

		& > .label {
			--horizontal-position: calc(100% + 0.5ch);

			position: absolute;
			top: 50%;

			color: var(--color-calico);
			white-space: nowrap;

			transform: translateY(-50%);

			pointer-events: none;

			&.left {
				right: var(--horizontal-position);
			}
			&.right {
				left: var(--horizontal-position);
			}
		}

		@media (--motion) {
			transition: all var(--transition);
		}

		&:--hoverfocus {
			--color-background: var(--color-calico);
			--color-content: var(--color-kilamanjaro);
			--color-shadow: var(--color-koamaru);
		}
	}
</style>
