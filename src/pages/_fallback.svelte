<script>
	import { url } from "@roxi/routify";
</script>

<svelte:head>
	<title>xeho91 | 404 - page not found</title>
</svelte:head>

<h1>404</h1>
<p>The page you are trying to visit doesn't exist.</p>
<a href="{$url("..")}">Return to previous page</a>

<style>
	h1 {
		margin: 0;

		font-size: 35vh;

		user-select: none;
	}

	h1,
	p,
	a {
		text-align: center;
	}

	a {
		display: block;

		width: fit-content;
		margin: auto;
		padding: 1em 0.5em;

		color: var(--color-background);

		background-color: var(--color-content);
		border-radius: 10em;
	}
</style>
