<script>
	import NavButtonList from "$lib/NavButtonList.svelte";
	import CircleButton from "$lib/CircleButton.svelte";

	import iconNetwork from "@iconify-icons/carbon/network-4.js";

	import { SOCIAL_MEDIA_PROFILES } from "$data/site.js";
</script>

<NavButtonList
	id="social-media"
	label="Social media"
	icon={iconNetwork}
	label_position="left"
	style="--links-count: {SOCIAL_MEDIA_PROFILES.length};"
>
	{#each SOCIAL_MEDIA_PROFILES as profile, index}
		<li style="--index: {index + 1};">
			<div class="slice-wrapper">
				<CircleButton
					tag="link"
					href="{profile.url}"
					icon={profile.icon}
					label={profile.name}
				/>
			</div>
		</li>
	{/each}
</NavButtonList>

<style>
	:global(#social-media) {
		grid-area: social-media;
		justify-self: flex-end;
	}

	:global(#social-media_button) {
		& > :global(.label) {
			@media screen and (max-width: 539px) {
				display: none;
			}
		}
	}

	:global(#social-media_list) {
		--size: 22em;
		--color-background: var(--color-clairvoyant);
		--color-content: var(--color-calico);

		position: absolute;
		top: calc((-0.5 * var(--size)) + var(--header-height));
		right: calc(-0.5 * var(--size));

		width: var(--size);
		height: var(--size);

		border-radius: 50%;

		clip-path: polygon(
			0% 50%, /* top-left corner */
			50% 50%, /* top-right corner */
			50% 100%, /* bottom-right corner */
			0% 100% /* bottom-left corner */
		);
	}

	li {
		--side: 0.577;
		--pi: 3.14;
		--slice-angle: calc(90deg / var(--links-count));

		position: absolute;
		bottom: 0;
		left: 0;

		width: 50%;
		height: 50%;

		background-color: var(--color-background);
		border-top: var(--border);
		border-right: var(--border);
		border-bottom-left-radius: 100%;

		/*
		* TODO:
		* Refactor this,
		* without the need of defining each nth-of-type
		*/
		&:nth-of-type(1) {
			clip-path: polygon(
				0% 0%,
				100% 0%, /* slice-angle */
				0% calc(100% * var(--side))
			);
		}
		&:nth-of-type(2) {
			clip-path: polygon(
				0% calc(100% * var(--side)),
				100% 0%, /* slice-angle */
				calc(100% - (100% * var(--side))) 100%
			);
		}
		&:nth-of-type(3) {
			clip-path: polygon(
				calc(100% - (100% * var(--side))) 100%,
				100% 0%, /* slice-angle */
				100% 100%
			);
		}

		&:nth-of-type(even) {
			filter: contrast(0.95);
		}

		& > .slice-wrapper {
			--wrapper-size: calc(100% / var(--links-count));
			--rotate: calc(
				var(--slice-angle) - (var(--slice-angle) * (var(--index) - 1))
			);

			position: absolute;
			top: 0;
			right: 0;

			display: flex;
			place-items: center;
			place-content: center;

			width: var(--wrapper-size);
			height: var(--wrapper-size);

			border-radius: 50%;

			transform: rotate(var(--rotate)) translate(-125%, 125%);
			transform-origin: 100% 0%;

			& > :global(a) {
				display: block;

				transform: rotate(-45deg);

				& > :global(.icon) {
					padding: 0.4em;

					transform: rotate(calc(-1 * var(--rotate) + 45deg));
				}
			}
		}
	}
</style>
