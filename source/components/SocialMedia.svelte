<script>
	import Icon from "$components/Icon.svelte";

	import iconGitHub from "$source/icons/github.svg";
	import iconTwitter from "$source/icons/twitter.svg";
	import iconLinkedin from "$source/icons/linkedin.svg";
</script>


<style>
	ul {
		display: flex;

		padding: 0;

		& > li {
			padding-left: 1em;

			list-style: none;
		}
	}

</style>


<div id="social-media">
	<ul>
		<li><a href="https://github.com/xeho91"><Icon src="{iconGitHub}" /></a></li>
		<li><a href="https://twitter.com/xeho91"><Icon src="{iconTwitter}" /></a></li>
		<li><a href="https://linkedin.com/in/xeho91"><Icon src="{iconLinkedin}" /></a></li>
	</ul>
</div>
