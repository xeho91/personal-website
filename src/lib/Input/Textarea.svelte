<!--
	FIXME:: Typings & CSS
	Improve the CSS styling, at the moment is ugly.
	Maybe write own component based on "cl-editor"?
-->
<script lang="typescript">
	import { onMount } from "svelte";
	import Case from "case";

	// https://github.com/nenadpnc/cl-editor
	import Editor from "cl-editor/src/Editor.svelte";

	import Icon from "@iconify/svelte";
	import iconSucccess from "@iconify-icons/carbon/checkmark-filled.js";
	import iconError from "@iconify-icons/carbon/warning-hex-filled.js";

	export let label: string;
	export let editor: boolean;

	export let rows = 10;
	export let cols = 80;
	export let minlength = 25;
	export let placeholder: string | undefined = undefined;
	export let required = false;
	export let disabled = false;

	let size = `--textarea-width: ${cols}ch; --textarea-height: ${rows}rem;`;
	let name = Case.camel(label.split(" ").slice(0, 3).join(" "));

	onMount(() => {
		const textarea = document.querySelector(
			"textarea"
		) as HTMLTextAreaElement;
		const contentElement = document.getElementById(name) as HTMLElement;

		contentElement.addEventListener("focus", () => {
			const textareaFieldEl = document.querySelector(
				".textarea-field"
			) as HTMLElement;
			textareaFieldEl.classList.add("is-focused");
		});
		contentElement.addEventListener("blur", () => {
			const textareaFieldEl = document.querySelector(
				".textarea-field"
			) as HTMLElement;

			textareaFieldEl.classList.remove("is-focused");
		});

		textarea.setAttribute("name", name);
		placeholder && textarea.setAttribute("placeholder", placeholder);
		required && textarea.setAttribute("required", `${required}`);
	});

	function handleEditorChange({ detail }: CustomEvent) {
		const textarea = document.querySelector(
			"textarea"
		) as HTMLTextAreaElement;

		textarea.value = detail;
	}
</script>

<div
	class="textarea-field"
	class:is-optional={!required}
	class:is-required={required}
	style={size}
>
	{#if editor}
		<Editor
			contentId={name}
			actions={["b", "i", "u", "ul", "ol"]}
			on:change={handleEditorChange}
		/>

		<div class="editor-header">
			<label class="editor-label" for={name}>{label}</label>
			<span class="editor-placeholder" aria-hidden="true"
				>{placeholder}</span
			>
		</div>
	{:else}
		<textarea
			{name}
			{placeholder}
			{minlength}
			inputmode="text"
			{required}
			autocomplete="on"
			spellcheck
			autocapitalize="sentences"
			style={size}
			{disabled}
		/>

		<label class="textarea-label" for={name}>{label}</label>
		<span class="placeholder" aria-hidden="true">{placeholder}</span>

		<div class="validation-indicator" aria-hidden="true">
			<Icon class="icon valid" icon={iconSucccess} />
			<Icon class="icon invalid" icon={iconError} />
		</div>
	{/if}
</div>

<style lang="postcss">
	/* stylelint-disable no-descending-specificity */

	.textarea-field {
		--textarea-padding: 0.5em;

		position: relative;

		max-width: var(--textarea-width);

		&.is-optional {
			--color-foreground: var(--color_optional-fg);
			--color-background: var(--color_optional-bg);
		}
		&.is-required {
			--color-foreground: var(--color_required-fg);
			--color-background: var(--color_required-bg);
		}
	}

	:global(.cl-actionbar) {
		--color-background: var(--color_info-bg);
		--color-outline: var(--color-background);

		@mixin left absolute {
			top: -3em;
		}

		background-color: var(--color-background) !important;
		@mixin outline;

		visibility: hidden;
		opacity: 0;

		@media (--motion) {
			transition: all var(--transition);
		}
	}
	.textarea-field:global(.is-focused) :global(.cl-actionbar) {
		visibility: visible;
		opacity: 1;
	}

	:global(.cl-actionbar > button) {
		--color-background: var(--color_inactive-bg);

		background-color: var(--color-background) !important;
	}
	:global(.cl-actionbar > button.active),
	:global(.cl-actionbar > button:hover),
	:global(.cl-actionbar > button:focus) {
		--color-background: var(--color-pampas);

		color: var(--color-clairvoyant) !important;
	}

	:global(.cl-content) {
		margin-top: calc(3em + 1ch);
		max-width: 78ch;

		@mixin color;
		word-break: break-all;

		background-color: var(--color-background) !important;
		@mixin border;
		outline: var(--outline-width) var(--outline-style) var(--color-outline) !important;

		resize: auto;

		@media (--motion) {
			transition: all var(--transition);
		}
	}
	:global(.cl-content:focus) {
		--color-background: var(--color_info-fg);
		--color-border: var(--color_info-bg);
		--color-outline: var(--color-border);
	}

	.editor-header {
		--color-foreground: var(--color-terracotta);
		--color-background: var(--color-clairvoyant);

		@mixin top absolute;

		@mixin flex row {
			place-content: space-between;
			place-items: flex-end;
		}

		width: 100%;
		height: 3em;

		@mixin color;

		@mixin background;

		pointer-events: none;

		@media (--motion) {
			transition: opacity var(--transition);
		}
	}
	.textarea-field:global(.is-focused) .editor-header {
		opacity: 0;
	}

	.textarea-field :global(textarea) {
		width: var(--textarea-width);
		height: calc(
			var(--textarea-height) + (2 * var(--textarea-padding)) +
				(2 * var(--border-width))
		);
		padding: var(--textarea-padding);

		@mixin color;
		line-height: 1em;

		@media (--motion) {
			transition: all var(--transition);
		}

		&::placeholder {
			opacity: 0;
			visibility: hidden;
		}
	}

	.textarea-label {
		position: absolute;

		padding: calc(var(--textarea-padding) / 2) var(--textarea-padding);

		font-size: smaller;

		border-radius: var(--textarea-padding);

		pointer-events: none;

		@media (--motion) {
			transition: all var(--transition);
		}
	}
	textarea:optional ~ label {
		&::after {
			--color-foreground: var(--color_optional-fg);
			--color-background: var(--color_optional-bg);

			@mixin top absolute;

			margin-left: 1em;
			padding: calc(var(--textarea-padding) / 2) var(--textarea-padding);

			@mixin color;
			font-family: var(--font_sans-serif);
			font-style: italic;

			@mixin background;
			border-radius: var(--textarea-padding);

			content: "(optional)";

			@media (--motion) {
				transition: all var(--transition);
			}
		}
	}
	textarea:focus ~ label {
		--color-foreground: var(--color_info-fg);
		--color-background: var(--color_info-bg);
	}
	textarea:focus ~ label,
	textarea:not(:placeholder-shown) ~ label {
		top: calc(-0.5em - var(--textarea-padding) + var(--border-width));
		left: var(--outline-width);
	}
	textarea:not(:focus):placeholder-shown ~ label {
		top: calc(var(--textarea-height) / 2);
		left: var(--textarea-padding);
	}
	textarea:invalid:not(:placeholder-shown):not(:focus) ~ label {
		--color-foreground: var(--color_error-fg);
		--color-background: var(--color_error-bg);
	}
	textarea:valid:not(:placeholder-shown):not(:focus) ~ label {
		--color-foreground: var(--color_success-fg);
		--color-background: var(--color_success-bg);
	}

	.placeholder {
		--color-foreground: var(--color_focused-fg);
		--color-background: var(--color_focused-bg);

		position: absolute;
		right: calc(-1 * var(--border-width));
		bottom: -0.75em;

		padding: calc(var(--textarea-padding) / 2) var(--textarea-padding);

		font-size: smaller;
		font-style: italic;

		white-space: nowrap;

		border-radius: var(--textarea-padding);

		@mixin color;

		@mixin background;

		@media (--motion) {
			transition: opacity var(--transition);
		}
	}

	textarea:not(:focus) ~ .placeholder,
	textarea:focus:not(:placeholder-shown) ~ .placeholder {
		opacity: 0;
	}
	textarea:focus:placeholder-shown ~ .placeholder {
		opacity: 1;

		transition-delay: 2s;
	}

	textarea ~ .validation-indicator {
		--icon-size: 1em;

		@mixin center-y absolute {
			right: 0.5ch;
		}

		display: flex;

		size: var(--icon-size);

		& > :global(.icon) {
			position: absolute;

			@mixin color;

			opacity: 0;

			@media (--motion) {
				transition: opacity var(--transition);
			}
		}
		& > :global(.icon.valid) {
			--color-foreground: var(--color_success-bg);
		}
		& > :global(.icon.invalid) {
			--color-foreground: var(--color_error-bg);
		}
	}
	textarea:valid:not(:focus):not(:placeholder-shown)
		~ .validation-indicator
		> :global(.icon.valid) {
		opacity: 1;
	}
	textarea:invalid:not(:focus):not(:placeholder-shown)
		~ .validation-indicator
		> :global(.icon.invalid) {
		opacity: 1;
	}
</style>
