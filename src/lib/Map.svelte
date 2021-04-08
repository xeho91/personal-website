<script>
	import InlineSVG from "svelte-inline-svg";

	import { mapVisible, mapShowCountry } from "$data/stores.js";
	import { beforeUpdate } from "svelte";

	function hideMap({ target }) {
		if (target.id === "world-map" || target.nodeName === "SPAN") {
			mapVisible.set(false);
		}
	}

	function hideOnEscapeKey({ key }) {
		if (mapVisible && key === "Escape") {
			mapVisible.set(false);
		}
	}

	beforeUpdate(() => {
		let name = $mapShowCountry;
		console.log($mapShowCountry);
		let mapElement = document.getElementById("world-map");

		if (mapElement) {
			let hightlightedElements = [ ...mapElement.querySelectorAll(".highlighted") ];

			if (hightlightedElements?.length) {
				hightlightedElements.forEach((element) => element.classList.remove("highlighted"));
			}

			let pathWithId = mapElement.querySelector(`#${name}`);

			if (pathWithId) {
				pathWithId.classList.add("highlighted");
			} else {
				let pathsWithClass = [ ...mapElement.querySelectorAll(`.${name}`) ];

				if (pathsWithClass?.length) {
					pathsWithClass.forEach((path) => path.classList.add("highlighted"));
				} else {
					let pathsWithAttribute = mapElement.querySelectorAll(`[name="${name}"]`)

					if (pathsWithAttribute) {
						pathsWithAttribute.forEach((path) => path.classList.add("highlighted"));
					} else {
						console.error("Country not found!");
					}
				}
			}
		}
	});
</script>

<svelte:window on:keydown={hideOnEscapeKey} />

<div
	id="world-map"
	aria-hidden="{!$mapVisible}"
	aria-label="World map with the country highlighted"
	on:click={hideMap}
>
	<span>Click anywhere outside the map to close it</span>

	<InlineSVG src="/images/world.svg" />
</div>


<style>
	#world-map {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;

		display: flex;
		flex-direction: column-reverse;
		place-content: center;
		place-items: center;

		width: 100%;
		height: 100%;
		padding: 5%;

		background-color: hsla(var(--kilamanjaro_HSL), 0.90);

		& > span {
			padding: 0.25em;

			color: var(--color-terracotta);

			font-size: 0.85em;

			background-color: var(--color-kilamanjaro);
			border-radius: 1em;
		}

		& > :global(svg) {
			width: calc(100vw - (var(--content-padding) * 2));
			max-width: var(--tablet-width);
			padding: 2.5%;

			background-color: var(--color-clairvoyant);
			border: 0.25em solid var(--color-terracotta);
			border-radius: 1em;
			box-shadow: 0 0 10px 2px var(--color-kilamanjaro);

			fill: var(--color-calico);

			& :global(.highlighted) {
				fill: var(--color-punch);
				stroke: var(--color-punch);
				stroke-width: 0.5em;
				stroke-opacity: 0.5;
				stroke-linejoin: round;


				paint-order: markers;

				@media (--motion) {
					animation-name: pulse;
					animation-duration: 1.5s;
					animation-timing-function: ease-in-out;
					animation-iteration-count: infinite;
				}
			}
		}
	}

	@keyframes pulse {
		0%, 100% { stroke-width: 0em; }
		50% { stroke-width: 2em; }
	}

	#world-map[aria-hidden="true"] {
		display: none;
	}
</style>
