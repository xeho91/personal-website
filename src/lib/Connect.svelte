<script lang="typescript">
	import { Circle as CircleButton } from "$lib/Buttons";

	import iconNetwork from "@iconify-icons/carbon/network-4.js";
	import iconClose from "@iconify-icons/carbon/close.js";

	import { CONNECT_PROFILES } from "$config";
	import { expandedElements } from "$stores";

	import { navigating } from "$app/stores";

	function handleClick() {
		$expandedElements.navs.connect = !$expandedElements.navs.connect;
		const buttonElement = document.getElementById("button_connect");

		if (buttonElement) {
			buttonElement.classList.toggle("is-close");
		}
	}

	function focusNextLink(
		links: HTMLAnchorElement[],
		activeIndex: number,
		firstLink: HTMLAnchorElement
	) {
		if (activeIndex >= 0 && activeIndex !== links.length - 1) {
			links[activeIndex + 1].focus();
		} else {
			firstLink.focus();
		}
	}
	function focusPrevLink(
		links: HTMLAnchorElement[],
		activeIndex: number,
		lastLink: HTMLAnchorElement
	) {
		if (activeIndex <= links.length - 1 && activeIndex !== 0) {
			links[activeIndex - 1].focus();
		} else {
			lastLink.focus();
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		const key = event.key;
		const activeElement = document.activeElement;

		if ($expandedElements.navs.connect) {
			if (key === "ArrowDown" || key === "ArrowUp" || key === "Tab") {
				const links = Array.from(
					document.querySelectorAll("#list_connect > li > a")
				) as HTMLAnchorElement[];
				const firstLink = links[0];
				const lastLink = links[links.length - 1];

				if (
					activeElement &&
					links.includes(activeElement as HTMLAnchorElement)
				) {
					const linkIndex = links.indexOf(
						activeElement as HTMLAnchorElement
					);

					if (key === "ArrowDown") {
						event.preventDefault();
						focusNextLink(links, linkIndex, firstLink);
					} else if (key === "ArrowUp") {
						event.preventDefault();
						focusPrevLink(links, linkIndex, lastLink);
					} else if (key === "Tab") {
						if (activeElement === lastLink) {
							$expandedElements.navs.connect = false;
						}
					}
				} else {
					if (key === "ArrowDown") {
						event.preventDefault();
						firstLink.focus();
					} else if (key === "ArrowUp") {
						event.preventDefault();
						lastLink.focus();
					}
				}
			} else if (key === "Escape") {
				$expandedElements.navs.connect = false;
			}
		}
	}

	$: if ($navigating) {
		$expandedElements.navs.connect = false;
	}
</script>

<nav
	id="connect"
	aria-label="Connect with me through my online profiles"
	aria-controls="connect_list"
	aria-expanded={$expandedElements.navs.connect}
	on:keydown={handleKeydown}
>
	<CircleButton
		id="button_connect"
		label={$expandedElements.navs.connect ? "Close": "Connect"}
		title="Click to toggle list of my profiles"
		icon={$expandedElements.navs.connect ? iconClose : iconNetwork}
		label_position="left"
		on:click={handleClick}
	/>

	<ul id="list_connect" class="flexible-list" aria-label="submenu">
		{#each CONNECT_PROFILES as profile}
			<li>
				<CircleButton
					type="link"
					label={profile.name}
					title={`Visit my ${profile.name} profile`}
					href={profile.url}
					icon={profile.icon}
					label_position="left"
				/>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	#connect {
		--button-size: 3em;
		--button-padding: 0.5em;

		grid-area: connect;
		justify-self: flex-end;
	}

	:global(#button_connect) {
		--button-size: 3em;

		& > :global(.label) {
			@media screen and (width <= 450px) {
				visibility: hidden;
			}
		}
	}

	#list_connect {
		--color-border: var(--color-background-alt);
		--color-outline: var(--color_darker-bg);

		position: absolute;
		top: calc(var(--header-height) + var(--outline-width));
		right: calc(var(--content-padding));

		@mixin border;
		@mixin box-shadow;
		@mixin outline;

		@media screen and (--motion) {
			transition: all var(--transition);
		}

		&:focus-within {
			--color-border: var(--color_focused-bg);
		}

		& > li {
			--color-background: var(--color-background-alt);

			justify-content: flex-end;

			width: 100%;

			@mixin background;

			@media screen and (--motion) {
				transition: background var(--transition);
			}

			&:not(:last-of-type) {
				border-bottom: 1px solid var(--color-kilamanjaro);
			}
			&:focus-within {
				--color-background: var(--color_focused-fg);
			}

			& > :global(a.button > .label) {
				--color-foreground: transparent;
				--label-margin: 2ch;
			}
			& > :global(a.button:hover > .label) {
				--color-foreground: var(--color_hovered-fg);
				--color-background: var(--color_hovered-bg);
			}
			& > :global(a.button:focus > .label) {
				--color-foreground: var(--color_focused-fg);
				--color-background: var(--color_focused-bg);
			}
		}
	}
	nav[aria-expanded="false"] #list_connect {
		visibility: hidden;
		opacity: 0;
	}
	nav[aria-expanded="true"] #list_connect {
		visibility: visible;
		opacity: 1;
	}
</style>
