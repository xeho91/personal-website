<script>
	import { Link } from "svelte-routing";
</script>

<style>
	ul {
		display: flex;

		padding: 0;
	}

	li {
		padding-left: 1em;

		list-style: none;
	}
</style>

<nav id="site-navigation">
	<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="about-me">About me</Link></li>
	</ul>
</nav>
