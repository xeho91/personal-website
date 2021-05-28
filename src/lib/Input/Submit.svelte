<script lang="typescript">
	import Icon from "@iconify/svelte";
	import iconSubmit from "@iconify-icons/carbon/send-alt-filled";

	export let label: string;
	export let disabled = false;
</script>

<div class="submit-wrapper">
	<input type="submit" class="button" value={label} {disabled} />
	<Icon class="icon" icon={iconSubmit} />
</div>

<style lang="postcss">
	.submit-wrapper {
		--submit-padding: 0.5em;

		position: relative;
	}

	.submit-wrapper > input {
		--button-padding: var(--submit-padding);

		padding-left: calc(var(--submit-padding) + 2.5ch);

		font-size: larger;

		border-radius: calc(var(--submit-padding) * 4);

		@mixin border;

		@media (--motion) {
			transition: all var(--transition);
		}
	}

	.submit-wrapper > :global(.icon) {
		@mixin center-y absolute {
			left: calc(var(--submit-padding) * 4);
		}

		@mixin color;

		pointer-events: none;

		@media (--motion) {
			transition: color var(--transition);
		}
	}
	:global(form:invalid) .submit-wrapper :global(.icon) {
		--color-foreground: var(--color_disabled-fg);
	}
	:global(form:valid) .submit-wrapper > :global(.icon) {
		--color-foreground: var(--color_valid-bg);
	}
	:global(form:valid) .submit-wrapper > input:hover + :global(.icon),
	:global(form:valid) .submit-wrapper > input:focus + :global(.icon) {
		--color-foreground: var(--color_valid-fg);
	}
</style>
