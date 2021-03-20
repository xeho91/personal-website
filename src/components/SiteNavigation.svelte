<script>
	import { isActive, url } from "@roxi/routify";

	const links = [
		["./index", "About me"],
		["./contact", "Contact"],
		["./resume", "Resume"],
	];
</script>

<nav id="site-navigation">
	<ul>
		{#each links as [path, name]}
			<li><a
					href="{$url(path)}"
					aria-current="{$isActive(path) ? "page" : null}"
				>{name}</a></li>
		{/each}
	</ul>
</nav>

<style>
	#site-navigation {
		display: flex;
		place-content: center;

		width: 100%;

		& > ul {
			display: flex;

			padding: 0;

			& > li {
				min-width: 5em;
				padding: 0 0.5em;

				text-align: center;

				list-style: none;

				& > a[aria-current="page"] {
					font-weight: 700;
					text-shadow: var(--text-shadow);

					border-bottom: 1px solid var(--color-primary);
				}
			}
		}
	}
</style>
