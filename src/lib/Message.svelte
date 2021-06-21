<script lang="typescript">
	//
</script>

<div class="message">
	<p><slot /></p>

	{#if $$slots.actions}
		<div class="actions">
			<slot name="actions" />
		</div>
	{/if}
</div>

<style lang="postcss">
	.message {
		--color-background: hsla(var(--clairvoyant_HSL), 0.85);
		--gap: 1ch;

		position: relative;

		@mixin flex-center row {
			flex-wrap: wrap;
			gap: var(--gap);
		}

		padding: 1ch;

		@mixin background;
		border-radius: 1em;
		@mixin box-shadow;

		word-break: break-word;


		&:first-of-type {
			margin-top: 0;
		}
		&:last-of-type {
			margin-bottom: 0;

			&::after {
				/* Bubble chat ending */
				--triangle-size: 1em;

				@mixin center-x absolute {
					bottom: calc(-1 * var(--triangle-size));
				}

				width: calc(var(--triangle-size) * 2);
				height: var(--triangle-size);

				@mixin background;

				content: "";
				clip-path: polygon(50% 100%, 0% 0%, 100% 0%);

			}
		}

		& p {
			flex-grow: 1;
			flex-shrink: 1;
			flex-basis: 40ch;

			margin: 0;
		}

		& .actions {
			@mixin flex-center column;
		}
	}
	:--no-flex-gap .message :--owl {
		margin-top: var(--gap);
	}
</style>
