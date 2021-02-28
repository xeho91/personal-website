<script>
	export let symbol;
</script>

<style>
	.icon {
		--icon-size: 1em;


		width: var(--icon-size);
		width: var(--icon-size);

		fill: var(--color-primary);
	}
</style>


<svg class="icon">
	<use href="./assets/images/icons.svg#{symbol}" />
</svg>
