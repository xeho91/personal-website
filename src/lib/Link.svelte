<script>
	import Icon from "$lib/Icon.svelte";

	import iconWiki from "@iconify-icons/simple-icons/wikipedia.js";
	import iconTED from "@iconify-icons/simple-icons/ted.js";

	export let wiki = null;
	export let TEDx = null;
	export let tooltip = null;
	export let href = null;
	export let rel = null;
	export let place = "bottom";

	let fetchedWikiDescrption;

	async function fetchDescriptionFromWiki() {
		if (!fetchedWikiDescrption && !/Mobi|Android/i.test(navigator.userAgent)) {
			const APIendpoint = "https://en.wikipedia.org/w/api.php";
			let params = [
				"action=query",
				"prop=extracts",
				"exsentences=1",
				"exlimit=1",
				`titles=${wiki}`,
				"explaintext=1",
				"format=json",
				"formatversion=2",
				"origin=*"
			];
			const url = new URL(`${APIendpoint}?${params.join("&")}`);
			const response = await fetch(url, { method: "GET", mode: "cors" });
			const data = await response.json();

			fetchedWikiDescrption = data.query.pages[0].extract;
		}
	}

	function setWikiURL(name) {
		const wikiURL = "https://en.wikipedia.org/wiki";

		name = name.replace(/ /g, "_").toLowerCase();

		return `${wikiURL}/${name}`;
	}
</script>

{#if wiki}
	<a
		href="{setWikiURL(wiki)}"
		on:mouseover={fetchDescriptionFromWiki}
		class="link-wiki {fetchedWikiDescrption ? "description-fetched" : null}"
		data-description="{fetchedWikiDescrption}"
	>
		<Icon data={iconWiki} />{wiki}
	</a>
{:else if TEDx}
	<a href="{TEDx}" class="link-tedx">
		<Icon data={iconTED} /><slot />
	</a>
{:else if tooltip}
	<a rel="{rel}" href="{href}" class="link-tooltip">
		<span class="tooltip {place}">{tooltip}</span>
		<slot />
	</a>
{:else}
	<pre>The type of this link wasn't specified!</pre>
{/if}

<style>
	a {
		--shadow-position: 0 0 5px 1px;
		--shadow-color: hsla(var(--kilamanjaro_HSL), 0.75);
		--box-shadow: var(--shadow-position) var(--shadow-color);

		position: relative;

		display: inline-flex;
		align-items: baseline;

		& > .label {
			white-space: nowrap;
		}

		& > :global(.icon) {
			place-self: center;

			margin-right: 0.1em;
		}

		&.link-wiki,
		&.link-tedx {
			& > :global(.icon) {
				--icon-size: 0.85em;

				padding: 0.1em;

				color: var(--color-background);

				background-color: var(--color-content);
				border-radius: 50%;
			}
		}

		&.link-wiki {
			&.description-fetched {
				&::before {
					position: absolute;
					bottom: 1.5em;
					left: calc(50% + 1em);
					z-index: 1;

					width: max(22ch, 100%);
					padding: 0.5em;

					color: var(--color-calico);
					font-weight: small;
					font-size: 0.75em;
					white-space: break-spaces;
					text-shadow: none;

					background-color: var(--color-koamaru);
					border-radius: 0.5em;
					box-shadow: var(--box-shadow);

					transform: translateX(calc(-50% - 1em));

					visibility: hidden;

					content: attr(data-description);
				}

				&:hover,
				&:focus {
					&::before {
						visibility: visible;
					}
				}
			}
		}

		&.link-tooltip {
			& > .tooltip {
				--color-background: var(--color-koamaru);
				--color-content: var(--color-calico);

				position: absolute;
				left: 50%;

				padding: 0.15em 0.5em;

				color: var(--color-content);
				font-weight: lighter;
				font-size: smaller;
				white-space: nowrap;

				background-color: var(--color-background);
				border-radius: 1em;
				box-shadow: var(--box-shadow);

				transform: translateX(-50%);

				visibility: hidden;

				pointer-events: none;

				&::before {
					--triangle-size: 10px;

					position: absolute;
					left: 50%;

					width: var(--triangle-size);
					height: var(--triangle-size);

					background-color: var(--color-background);

					content: "";
					clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
				}

				--tooltip-position: calc(100% + 1.5ch);

				&.top {
					bottom: var(--tooltip-position);

					&::before {
						top: 100%;

						transform: rotate(180deg);
					}
				}
				&.bottom {
					top: var(--tooltip-position);

					&::before {
						bottom: 100%;
					}
				}
			}

			&:hover,
			&:focus {
				& > .tooltip {
					@media (hover: hover) {
						visibility: visible;
					}
				}
			}
		}
	}
</style>
