<script>
	import CircleButton from "$lib/CircleButton.svelte";
	import iconClose from "@iconify-icons/carbon/close.js";

	import { fade } from "svelte/transition";
	import { sineInOut } from 'svelte/easing';
	import { beforeUrlChange } from "@roxi/routify";
	import { expandedNavs } from "$data/stores.js";

	export let id;
	export let icon;
	export let label;

	let isNavExpanded = false;
	let isListHidden = !isNavExpanded;

	expandedNavs.update((navs) => {
		navs[id] = isNavExpanded;

		return navs;
	});

	function handleClick({ target }) {
		isNavExpanded = !isNavExpanded;

		expandedNavs.update((navs) => {
			navs[id] = isNavExpanded;

			return navs;
		});

		if (!target.matches(":hover")) {
			isListHidden = !isNavExpanded;
		}
	}
	function hideList() {
		if (!isNavExpanded) {
			isListHidden = true;
		}
	}
	function showList() {
		isListHidden = false;
	}

	$beforeUrlChange(() => {
		expandedNavs.set(Object.fromEntries(
			Object.entries($expandedNavs).map(([key]) => [key, false])
		));

		return true;
	});

	$: isNavExpanded = $expandedNavs[id];
	$: isListHidden = !isNavExpanded;
</script>

<nav
	id="{id}"
	aria-label="{label}"
	aria-controls="{id}_list"
	aria-expanded="{isNavExpanded}"
	{ ...$$restProps }
>
	<CircleButton
		id="{id}_button"
		icon={isNavExpanded ? iconClose : icon}
		label={label}
		label_position={$$props.label_position ? $$props.label_position : "right"}
		on:click={handleClick}
		on:mouseover={showList}
		on:mouseleave={hideList}
		{ ...$$restProps }
	/>

	{#if !isListHidden}
		<ul
			transition:fade="{{ duration: 250, easing: sineInOut }}"
			id="{id}_list"
			class="flexible-list"
			aria-hidden="{isListHidden}"
			hidden="{isListHidden}"
		>
			<slot />
		</ul>
	{/if}
</nav>

<style>
	nav {
		&[aria-expanded="true"] {
			--list-opacity: 1;

			& > :global(button) {
				--color-background: var(--color-mahogany);

				&:--hoverfocus {
					--color-background: var(--color-calico);
					--color-content: var(--color-mahogany);
					--color-shadow: var(--color-mahogany);
				}
			}
		}
		&[aria-expanded="false"] {
			--list-opacity: 0.75;
		}
	}

	ul {
		z-index: 1;

		opacity: var(--list-opacity);

		@media (--motion) {
			transition: var(--transition);
		}
	}
</style>
