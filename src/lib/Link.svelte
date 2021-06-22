<script lang="typescript">
	import Icon from "@iconify/svelte";

	import iconWiki from "@iconify-icons/simple-icons/wikipedia.js";
	import iconTED from "@iconify-icons/simple-icons/ted.js";

	export let wiki: string | null = null;
	export let TEDx: string | null = null;

	let wikiDescription: string;

	async function getWikiDescription(): Promise<void> {
		if (!wikiDescription && !/Mobi|Android/i.test(navigator.userAgent)) {
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
				"origin=*",
			];
			const url = new URL(`${APIendpoint}?${params.join("&")}`);
			const response = await fetch(url.href, {
				method: "GET",
				mode: "cors",
			});
			const data = await response.json();

			wikiDescription = data.query.pages[0].extract;
		}
	}

	function setWikiURL(name: string): string {
		const wikiURL = "https://en.wikipedia.org/wiki";

		name = name.replace(/ /g, "_").toLowerCase();

		return `${wikiURL}/${name}`;
	}
</script>

{#if wiki}
	<a
		href={setWikiURL(wiki)}
		title={`Read more about ${wiki} on Wikipedia`}
		on:mouseover={getWikiDescription}
		class="link-wiki"
		class:description-fetched={wikiDescription}
		data-description={wikiDescription}
	>
		<Icon icon={iconWiki} class="icon" />
		<span class="label">{wiki}</span>
	</a>
{:else if TEDx}
	<a href={TEDx} class="link-tedx" title="Watch this talk on ted.com">
		<Icon icon={iconTED} class="icon" /><slot />
	</a>
{/if}

<style lang="postcss">
	a {
		position: relative;

		display: inline-flex;
		align-items: baseline;

		& > :global(.icon) {
			place-self: center;

			margin-right: 0.1em;
		}

		& > .label {
			white-space: nowrap;
		}

		&.link-wiki {
			&.description-fetched {
				&::before {
					--color-foreground: var(--color_info-fg);
					--color-background: var(--color_info-bg);
					--color-shadow: var(--color-kilamanjaro);

					@mixin center-x absolute {
						bottom: 2em;
						z-index: 1;
					}

					width: max(22ch, 100%);
					padding: 0.5em;

					font-weight: var(--sans-serif_lighter);
					font-size: smaller;
					white-space: break-spaces;
					text-shadow: none;

					border-radius: 0.5em;

					visibility: hidden;
					opacity: 0;

					content: attr(data-description);

					@mixin color;

					@mixin background;
					@mixin box-shadow;

					@media (--motion) {
						transition: opacity var(--transition);
					}
				}

				&:hover,
				&:focus {
					&::before {
						visibility: visible;
						opacity: 1;
					}
				}
			}
		}
	}
</style>
