<script lang="typescript">
	import Icon from "@iconify/svelte";
	import iconTerminal from "@iconify-icons/carbon/terminal.js";

	import CopyButton from "$lib/Button/Copy.svelte";
import Case from "case";

	export let title = "Terminal";

	let id = $$props.id || Case.kebab(title);
</script>

<div {id} class="terminal" role="status">
	<div class="toolbar">
		<p class="title">
			<Icon icon={iconTerminal} class="icon" inline={true} />
			<small><strong>{title}</strong></small>
		</p>

		<CopyButton
			contentId="{id}_output"
			title="Copy {title} output to clipboard"
		/>
	</div>

	<pre id="{id}_output" class="output">
		<slot>Empty terminal output...</slot>
	</pre>
</div>

<style lang="postcss">
	.terminal {
		--color-border: var(--color-background);
		--terminal-padding: 1ch;

		@mixin flex column;

		@mixin border;
		border-radius: var(--status-padding);
	}

	.toolbar {
		--color-background: var(--color_darker-bg);

		@mixin flex-center-y row {
			place-content: space-between;
		}

		width: 100%;
		padding: 0 var(--terminal-padding);

		user-select: none;

		@mixin color;

		@mixin background;

		& .title {
			margin: 0;
		}
	}

	.output {
		--color-foreground: var(--color_terminal-fg);
		--color-background: var(--color_terminal-bg);
		--color-shadow: var(--color_darker-bg);
		--gap: 1ch;

		@mixin flex column;
		gap: var(--gap);

		max-width: 80ch;
		margin: 0;
		padding: var(--terminal-padding);

		white-space: normal;

		@mixin box-shadow-inset;
		@mixin background;
	}
	:--no-flex-gap .message :--owl {
		margin-left: var(--gap);
	}
</style>
