<script>
	import { Link } from "svelte-routing";

	export let to, name;
</script>


<style>
	li {
		min-width: 5em;
		padding: 0 0.5em;

		text-align: center;

		list-style: none;
	}

	:global([aria-current="page"]) {
		font-weight: 700;
		text-shadow: var(--text-shadow);

		border-bottom: 1px solid var(--color-primary);
	}
</style>


<li><Link to="{to}">{name}</Link></li>
