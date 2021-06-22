<script lang="typescript">
	export let legend: string;
	export let required = false;
</script>

<fieldset class:has-required={required}>
	<legend>{legend}</legend>

	<slot />
</fieldset>

<style lang="postcss">
	fieldset {
		--gap: 1.5em;

		@mixin flex column {
			gap: var(--gap);
		}

		width: 100%;
		padding-bottom: 1em;

		& legend {
			margin-bottom: 1em;
			padding: 0.25em 0.5em;

			border-radius: 1em 1em 0 0;
		}

		&.has-required {
			--color-border: var(--color_highlighted-bg);

			& legend {
				font-weight: bolder;

				border-top: var(--border);
				border-right: var(--border);
				border-left: var(--border);
			}
		}
		&:not(.has-required) {
			--color-background: var(--color-kilamanjaro);
			--color-border: var(--color-background);
		}
	}
</style>
