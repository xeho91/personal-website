<script lang="typescript">
	import { page } from "$app/stores";
	import { SITE_METADATA } from "$config";

	export let type = "website";
	export let title: string;
	export let description: string;
	export let imageOG = SITE_METADATA.image.og;
	export let imageTwitter = SITE_METADATA.image.twitter;

	const formattedTitle = `${SITE_METADATA.name} | ${title}`
</script>

<svelte:head>
	<title>{formattedTitle}</title>

	<link rel="canonical" href={$page.host} />
	<meta property="og:url" content="{$page.host}{$page.path}" />
	<meta property="og:type" content={type} />

	<meta property="og:site_name" content="{SITE_METADATA.name}'s {SITE_METADATA.shortDescription}" />
	<meta property="og:title" content={formattedTitle} />

	<meta name="description" value={description} />
	<meta property="og:description" content={description} />

	<meta property="og:image" content={imageOG.url} />
	<meta property="og:image:secure_url" content="{$page.host}{imageOG.url}" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:alt" content={imageOG.alt} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta property="twitter:card" content="summary" />
	<meta property="twitter:image" content={imageTwitter.url} />
	<meta property="twitter:image:alt" content={imageTwitter.alt}>
	<meta property="twitter:site" content="@{SITE_METADATA.name}" />
</svelte:head>
