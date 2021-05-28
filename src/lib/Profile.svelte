<script lang="typescript">
</script>

{#if $$slots.default}
	<div class="messages-wrapper">
		<slot />
	</div>
{/if}

<div class="profile-flipper">
	<figure
		class="flipper"
		aria-label="xeho91's flipping round picture with
		avatar and profile photo"
	>
		<img
			id="xeho91-avatar"
			class="front"
			alt="xeho91's avatar"
			src="/images/favicon.svg"
		/>
		<img
			id="xeho91-profile_photo"
			class="back"
			alt="xeho91's profile"
			src="/images/profile.jpg"
		/>
	</figure>
</div>

<style lang="postcss">
	.messages-wrapper {
		--gap: 0.5em;

		@mixin flex column {
			gap: var(--gap);
		}

		max-width: 80ch;
	}
	:--no-flex-gap .messages-wrapper :--owl {
		margin-top: var(--gap);
	}

	.profile-flipper {
		--profile-size: min(10em, 30vw);
		--transform: rotateX(180deg);

		position: relative;

		perspective: var(--profile-size);

		&::before,
		&::after {
			--color-background: var(--color-clairvoyant);

			@mixin center-y absolute;
			@mixin background;
			@mixin box-shadow;
			opacity: 0;

			pointer-events: none;

			@media (--motion) {
				transition: opacity var(--transition);
			}
		}
		&::before {
			/* triangle -> bubble chat ending */
			--triangle-size: 0.5em;

			right: calc(-2 * var(--triangle-size));

			width: calc(var(--triangle-size) * 2);
			height: var(--triangle-size);

			content: "";
			clip-path: polygon(100% 0%, 100% 100%, 0% 50%);
		}
		&::after {
			/* bubble chat */
			--greet-padding: 0.25em;

			left: calc(100% + 1ch);

			padding: var(--greet-padding) calc(var(--greet-padding) * 2);

			font-size: 1.5em;
			font-family: var(--font_serif);

			border-radius: 1em;

			content: "Hello!";
		}
		&:hover::before,
		&:hover::after,
		&:focus::after,
		&:focus::before {
			opacity: 1;
		}
	}

	.flipper {
		position: relative;

		size: var(--profile-size);

		margin: 0;

		transform-style: preserve-3d;

		@media (--motion) {
			transition: transform var(--transition);
		}

		& > img {
			@mixin top absolute {
				left: 0;
			}

			@mixin circle var(--profile-size);
			@mixin box-shadow;

			backface-visibility: hidden;

			&.front {
				transform: rotateX(0deg) rotateY(0deg);
			}
			&.back {
				transform: var(--transform);
			}

			/* TODO: Create a profile photo, without the need to add border */
			&#xeho91-profile_photo {
				border: 5px solid var(--color-terracotta);
			}
		}
	}
	.profile-flipper:hover .flipper,
	.profile-flipper:focus .flipper {
		transform: var(--transform);
	}
</style>
