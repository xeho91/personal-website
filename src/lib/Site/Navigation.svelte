<script>
	import Icon from "$lib/Icon.svelte";
	import NavButtonList from "$lib/NavButtonList.svelte";

	import iconMenu from "@iconify-icons/carbon/menu.js";
	import iconCaretRight from "@iconify-icons/carbon/caret-right.js";
	import iconCaretLeft from "@iconify-icons/carbon/caret-left.js";

	import { isActive, url } from "@roxi/routify";
	import { SITE_NAVIGATION_LINKS } from "$data/site.js";
</script>

<NavButtonList
	id="site-navigation"
	icon={iconMenu}
	label="Menu"
>
	{#each SITE_NAVIGATION_LINKS as link}
		<li aria-current={$isActive($url(link.url)) ? "page" : null}>
			{#if $isActive($url(link.url))}
				<span class="label">
					<Icon data="{iconCaretRight}" />
					{link.label}
					<Icon data="{iconCaretLeft}" />
				</span>
			{:else}
				<a rel="prefetch" href="{link.url}" class="label">{link.label}</a>
			{/if}
			<span class="description">{link.description}</span>
		</li>
	{/each}
</NavButtonList>

<style>
	:global(#site-navigation) {
		grid-area: navigation;
		justify-self: flex-start;
	}

	:global(#site-navigation_list) {
		--color-background: var(--color-clairvoyant);
		--color-content: var(--color-calico);
		--color-link: var(--color-terracotta);

		position: absolute;
		top: 100%;
		left: 0;

		flex-direction: column;
		place-content: center;

		width: 100%;
		height: calc(100vh - var(--header-height));
		padding: 1em var(--content-padding) calc(var(--header-height) / 2);

		background-color: var(--color-background);

		& > li {
			flex-direction: column;

			&:not(:last-of-type) {
				margin-bottom: 1em;
				padding-bottom: 1em;

				border-bottom: 1px dotted var(--color-calico);
			}

			& > .label {
				display: flex;
				align-items: center;
			}

			& > .description {
				color: var(--color-content);
				font-size: small;
				font-style: italic;
			}

			&[aria-current="page"] {
				cursor: not-allowed;

				& >.label {
					color: var(--color-disco);
					font-weight: bolder;
				}
			}
		}

		&[aria-expanded="true"] {
			& > :global(#site-navigation_button) {
				--color-background: var(--color-disco);
				--color-content: var(--color-kilamanjaro);

				&:--hoverfocus {
					--color-background: var(--color-calico);
					--color-content: var(--color-disco);
				}
			}
		}
	}
</style>
