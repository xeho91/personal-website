<script>
	import Icon from "$components/Icon.svelte";

	import iconGitHub from "@iconify-icons/simple-icons/twitter.js";
	import iconTwitter from "@iconify-icons/simple-icons/github.js";
	import iconLinkedin from "@iconify-icons/simple-icons/linkedin.js";

	let profiles = [
		{
			name: "Github",
			url: "https://github.com/xeho91/",
			icon: iconGitHub,
		},
		{
			name: "Twitter",
			url: "https://twitter.com/xeho91/",
			icon: iconTwitter,
		},
		{
			name: "Linkedin",
			url: "https://linkedin.com/in/xeho91/",
			icon: iconLinkedin,
		},
	];
</script>

<nav id="social-media">
	<ul>
		{#each profiles as profile}
			<li><a href={profile.url}><Icon name={profile.icon} />
			<span class="tooltip">View my {profile.name} profile</span></a></li>
		{/each}
	</ul>
</nav>

<style>
	#social-media {
		display: flex;
		place-content: center;

		width: 100%;
	}

	ul {
		display: flex;

		padding: 0;

		& > li {
			display: flex;
			place-content: center;
			place-items: center;

			width: 3em;
			height: 3em;
			padding: 0 0.5em;

			list-style: none;

			& > a {
				position: relative;

				display: flex;
				place-content: center;
				place-items: center;

				background-color: var(--color-background);
				border-radius: 50%;

				box-shadow: none;

				@media screen and (prefers-reduced-motion: no-preference) {
					transition: all 0.2s ease-in-out;
				}

				&:focus,
				&:hover {
					padding: 0.55em;

					background-color: var(--color-primary);
					box-shadow: var(--box-shadow);

					@media screen and (prefers-reduced-motion: no-preference) {
						transition: all 0.2s ease-in-out;
					}

					& > :global(.icon) {
						--icon-size: 2em;

						@media screen and (prefers-reduced-motion: no-preference) {
							transition: all 0.2s ease-in-out;
						}

						color: var(--color-background);
					}

					& > span {
						font-weight: var(--font-weight_normal);

						visibility: visible;

						@media screen and (prefers-reduced-motion: no-preference) {
							transition: all 0.2s ease-in-out;
						}
					}
				}

				& span {
					position: absolute;
					bottom: calc(-2 * var(--font-size));

					padding: 0.15em 0.5em;

					color: var(--color-background);
					white-space: nowrap;

					background-color: var(--color-primary);
					border-radius: 1em;
					box-shadow: var(--box-shadow);

					visibility: hidden;

					pointer-events: none;

					&::before {
						--triangle-size: 10px;

						position: absolute;
						bottom: calc(1.5em + var(--triangle-size) - 2px);
						left: 50%;

						border-right: var(--triangle-size) solid transparent;
						border-bottom: var(--triangle-size) solid
							var(--color-primary);
						border-left: var(--triangle-size) solid transparent;

						transform: translate(-50%, 100%);

						content: "";
					}
				}
			}
		}
	}
</style>
