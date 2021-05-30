<script lang="typescript">
	import InlineSVG from "svelte-inline-svg";

	import { map } from "$data/stores";
	import { beforeUpdate } from "svelte";

	/** Hide map in the DOM, if click happens outside map element */
	function handleClick({ target }: MouseEvent) {
		if (
			(target && (target as HTMLDivElement).id === "world-map") ||
			(target as HTMLElement).nodeName === "SPAN"
		) {
			$map.hidden = true;
		}
	}

	/** Hide map in the DOM */
	function handleKeydown({ key }: KeyboardEvent) {
		if (!$map.hidden && key === "Escape") {
			$map.hidden = true;
		}
	}

	/** Update country to highlight */
	beforeUpdate(() => {
		let mapElement = document.getElementById("world-map");

		if ($map.showCountry && mapElement) {
			let hightlightedElements = Array.from(
				mapElement.querySelectorAll(".highlighted")
			);

			if (hightlightedElements?.length) {
				hightlightedElements.forEach((element) =>
					element.classList.remove("highlighted")
				);
			}

			let pathWithId = mapElement.querySelector(`#${$map.showCountry}`);

			if (pathWithId) {
				pathWithId.classList.add("highlighted");
			} else {
				let pathsWithClass = Array.from(
					mapElement.querySelectorAll(`.${$map.showCountry}`)
				);

				if (pathsWithClass?.length) {
					pathsWithClass.forEach((path) =>
						path.classList.add("highlighted")
					);
				} else {
					let pathsWithAttribute = mapElement.querySelectorAll(
						`[name="${$map.showCountry}"]`
					);

					if (pathsWithAttribute) {
						pathsWithAttribute.forEach((path) =>
							path.classList.add("highlighted")
						);
					} else {
						throw Error("This country name was not found!");
					}
				}
			}
		}
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	id="world-map"
	aria-hidden={$map.hidden}
	aria-label="World map with the country highlighted"
	on:click={handleClick}
>
	<InlineSVG src="/images/world.svg" />

	<span class="tip" >
		Click anywhere outside the map or press <strong>Escape</strong> key
		to close it.
	</span>
</div>

<style lang="postcss">
	#world-map {
		--color-background: hsla(var(--kilamanjaro_HSL), 0.75);

		@mixin top fixed {
			left: 0;
			z-index: 2;
		}

		flex-direction: column;
		place-items: center;
		place-content: center;

		size: 100%;

		padding: 5%;

		@mixin background;

		&[aria-hidden="false"] {
			display: flex;
		}
		&[aria-hidden="true"] {
			display: none;
		}

		& > .tip {
			--color-foreground: var(--color-pampas);
			--color-background: var(--color-koamaru);

			padding: 0.25em;

			@mixin color;

			font-size: smaller;
			text-align: center;

			@mixin background;
			border-radius: 1em;
		}

		& > :global(svg) {
			--color-foreground: hsla(var(--calico_HSL), 0.75);
			--color-background: var(--color-clairvoyant);

			width: calc(100vw - (var(--content-padding) * 2));
			max-width: var(--tablet-width);
			padding: 2.5%;

			@mixin background;
			@mixin border;
			border-radius: 1em;
			@mixin box-shadow;

			fill: var(--color-foreground);

			& :global(.highlighted) {
				--color-foreground: var(--color_highlighted-fg);

				fill: var(--color-foreground);

				stroke: var(--color-foreground);
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
		0%,
		100% {
			stroke-width: 0em;
		}
		50% {
			stroke-width: 2em;
		}
	}
</style>
