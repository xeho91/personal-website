<script lang="typescript">
	import Case from "case";

	import Icon from "@iconify/svelte";
	import iconValid from "@iconify-icons/carbon/checkmark-filled.js";
	import iconInvalid from "@iconify-icons/carbon/warning-hex-filled.js";

	type InputText = "text" | "email" | "url";

	export let type: InputText = "text";
	export let label: string;

	export let placeholder: string | undefined = undefined;
	export let spellcheck: boolean | undefined = undefined;
	export let required: boolean | undefined = undefined;
	export let autocomplete = "on";
	export let autocapitalize = "off";
	export let size = 15;
	export let minlength: number | undefined = undefined;
	export let maxlength: number | undefined = undefined;
	export let pattern: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let disabled = false;

	let name = Case.camel(label.split(" ").slice(0, 3).join(" "));
	let width = `--input-width: ${size}ch;`;

	switch (type) {
		case "email":
			autocomplete = "email";
			break;
	}
</script>

<div
	class="text-field"
	class:is-required={required}
	class:is-optional={!required}
	style={width}
>
	<input
		{type}
		{name}
		{placeholder}
		{required}
		{pattern}
		{title}
		{minlength}
		{maxlength}
		inputmode={type}
		{autocomplete}
		{spellcheck}
		{autocapitalize}
		{disabled}
	/>

	<label for={name}>{label}</label>
	<span class="placeholder" aria-hidden="true">{placeholder}</span>

	<div class="validation-indicator" aria-hidden="true">
		<Icon class="icon valid" icon={iconValid} />
		<Icon class="icon invalid" icon={iconInvalid} />
	</div>
</div>

<style lang="postcss">
	.text-field {
		--input-height: 1.5em;
		--input-padding: 0.5em;

		position: relative;

		max-width: var(--input-width);

		&.is-optional {
			--color-foreground: var(--color_optional-fg);
			--color-background: var(--color_optional-bg);
		}
		&.is-required {
			--color-foreground: var(--color_required-fg);
			--color-background: var(--color_required-bg);
		}
	}

	input {
		width: 100%;
		height: calc(
			var(--input-height) + (2 * var(--input-padding)) +
				(2 * var(--border-width))
		);
		padding: var(--input-padding);

		line-height: 1em;

		@media (--motion) {
			transition: all var(--transition);
		}

		&::placeholder {
			opacity: 0;
			visibility: hidden;
		}
	}

	label {
		position: absolute;

		padding: calc(var(--input-padding) / 2) var(--input-padding);

		font-size: smaller;

		border-radius: var(--input-padding);

		pointer-events: none;

		@media (--motion) {
			transition: all var(--transition);
		}
	}
	input:optional + label {
		&::after {
			--color-foreground: var(--color_optional-fg);
			--color-background: var(--color_optional-bg);

			@mixin top absolute;

			margin-left: 1em;
			padding: calc(var(--input-padding) / 2) var(--input-padding);

			@mixin color;
			font-family: var(--sans-serif);
			font-style: italic;

			@mixin background;
			border-radius: var(--input-padding);

			content: "(optional)";

			@media (--motion) {
				transition: all var(--transition);
			}
		}
	}
	input:focus + label {
		--color-foreground: var(--color_info-fg);
		--color-background: var(--color_info-bg);
	}
	input:focus + label,
	input:not(:placeholder-shown) + label {
		top: calc(-0.5em - var(--input-padding) + var(--border-width));
		left: var(--outline-width);
	}
	input:not(:focus):placeholder-shown + label {
		top: calc(var(--input-height) / 2);
		left: var(--input-padding);
	}
	input:invalid:not(:placeholder-shown):not(:focus) + label {
		--color-foreground: var(--color_invalid-fg);
		--color-background: var(--color_invalid-bg);
	}
	input:valid:not(:placeholder-shown):not(:focus) + label {
		--color-foreground: var(--color_valid-fg);
		--color-background: var(--color_valid-bg);
	}

	.placeholder {
		--color-foreground: var(--color_info-fg);
		--color-background: var(--color_info-bg);

		position: absolute;
		right: calc(-1 * var(--border-width));
		bottom: -0.75em;

		padding: calc(var(--input-padding) / 2) var(--input-padding);

		font-size: smaller;
		font-style: italic;

		white-space: nowrap;

		border-radius: var(--input-padding);

		@mixin color;

		@mixin background;

		@media (--motion) {
			transition: opacity var(--transition);
		}
	}

	input:not(:focus) ~ .placeholder,
	input:focus:not(:placeholder-shown) ~ .placeholder {
		opacity: 0;
	}
	input:focus:placeholder-shown ~ .placeholder {
		opacity: 1;

		transition-delay: 2s;
	}

	input ~ .validation-indicator {
		@mixin center-y absolute {
			right: 0.5ch;
		}

		display: flex;

		size: 1em;

		& :global(.icon) {
			position: absolute;

			@mixin color;

			opacity: 0;

			@media (--motion) {
				transition: opacity var(--transition);
			}
		}
	}
	input:valid:not(:focus):not(:placeholder-shown)
		~ .validation-indicator
		> :global(.icon.valid) {
		opacity: 1;
	}
	input:invalid:not(:focus):not(:placeholder-shown)
		~ .validation-indicator
		> :global(.icon.invalid) {
		opacity: 1;
	}
</style>
