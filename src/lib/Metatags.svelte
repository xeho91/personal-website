<script lang="typescript">
	import { page } from "$app/stores";
	import { METADATA } from "$config";

	export let type = "website";
	export let title: string;
	export let description: string;
	export let imageOG = METADATA.image.og;
	export let imageTwitter = METADATA.image.twitter;

	// Subdomain "dev."
	const isDevelopment = $page.host.startsWith("dev.");
	const formattedTitle = `${METADATA.name} | ${title}`
</script>

<svelte:head>
	<!-- Search engines -->
	<title>{formattedTitle}</title>

	{#if isDevelopment}
		<meta name="robots" content="noindex,nofollow" />
	{/if}

	<meta name="description" content={description} />

	<!-- Social media (sharing) -->
	<meta property="og:description" content={description} />

	<meta property="og:url" content="https://{$page.host}{$page.path}" />
	<meta property="og:type" content={type} />

	<meta property="og:site_name" content="{METADATA.name}'s {METADATA.shortDescription}" />
	<meta property="og:title" content={formattedTitle} />

	<meta property="og:image" content="https://{$page.host}{imageOG.url}" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:alt" content={imageOG.alt} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta property="twitter:card" content="summary" />
	<meta property="twitter:image" content="https://{$page.host}{imageTwitter.url}" />
	<meta property="twitter:image:alt" content={imageTwitter.alt} >
	<meta property="twitter:site" content="@{METADATA.name}" />
	<meta property="twitter:creator" content="@{METADATA.author}" />
</svelte:head>
