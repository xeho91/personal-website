<script lang="typescript">
	import Case from "case";

	export let values: string[];
	export let label: string;
	export let checked: string | undefined = undefined;

	let name = Case.camel(label.split(" ").slice(0, 3).join(" "));
</script>

<div class="radio-field">
	<span class="radio-label">{label}</span>

	<div class="radio-values">
		{#each values as value}
			<div class="radio">
				<input
					type="radio"
					{name}
					{value}
					checked={value === checked}
				/>
				<label for={name}>{value}</label>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.radio-field {
		--gap: 1ch;

		@mixin flex-center row {
			gap: var(--gap);
		}

		font-family: var(--serif);
	}

	.radio-values {
		@mixin flex row {
			gap: var(--border-width);
		}
	}

	.radio {
		--radio-width: 5ch;
		--radio-height: 2em;
		--radio-padding: 0.5em;

		position: relative;
	}

	input {
		@mixin top absolute {
			left: 0;
		}

		size: 100%;

		opacity: 0;
	}

	label {
		@mixin flex-center column;

		width: var(--radio-width);
		height: var(--radio-height);
		padding: 0 var(--radio-padding);

		font-family: var(--sans-serif);

		@media (--motion) {
			transition: all var(--transition);
		}

		&::before {
			--indicator-size: 0.5em;

			@mixin center-x absolute {
				top: -1em;
			}

			@mixin background;
			@mixin circle 0.5em;
			opacity: 0;

			content: "";

			@media (--motion) {
				transition: opacity var(--transition);
			}
		}
	}
	input:checked + label {
		font-weight: var(--sans-serif_bolder);

		&::before {
			opacity: 1;
		}
	}
</style>
