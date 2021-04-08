<!-- routify:options title="About me" -->

<script>
	import WhoAmI from "./sections/who-am-i.svx";
	import WhyAGlobalCitizen from "./sections/why-a-global-citizen.svx";
	import WhatMakesMeConcerned from "./sections/what-makes-me-concerned.svx";
	import WhatIsMyWorkExperience from "./sections/what-is-my-work-experience.svx";
	import WhatTypeOfAdopterIAm from "./sections/what-type-of-adopter-i-am.svx";

	import { page, metatags } from "@roxi/routify";
	import { SITE_METADATA } from "$data/site.js";

	$: metatags.title = `${SITE_METADATA.name} | ${$page.title}`;
</script>

<article>
	<section><WhoAmI /></section>
	<section><WhyAGlobalCitizen /></section>
	<section><WhatMakesMeConcerned /></section>
	<section><WhatIsMyWorkExperience /></section>
	<section><WhatTypeOfAdopterIAm /></section>
</article>

<style>
	section {
		& > :global(p) {
			max-width: 80ch;
		}

		&:last-of-type {
			margin-bottom: 2em;
		}
	}
</style>
