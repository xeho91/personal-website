<script>
	import { Router, Route } from "svelte-routing";

	// Routes
	import AboutMe from "$routes/AboutMe.svelte";
	import Contact from "$routes/Contact.svelte";
	import Resume from "$routes/Resume.svelte";

	export let routes = [
		{
			name: "About me",
			path: "/",
			component: AboutMe,
		},
		{
			name: "Contact",
			path: "contact",
			component: Contact,
		},
		{
			name: "Resume",
			path: "resume",
			component: Resume,
		},
	];

	export let url = "";

	// Components
	import Header from "$components/Header.svelte";
	import SiteNavigation from "$components/SiteNavigation.svelte";
</script>

<Router {url}>
	<Header>
		{#each routes as route}
			<SiteNavigation to={route.path} name={route.name} />
		{/each}
	</Header>

	<main>
		{#each routes as route}
			<Route path={route.path} component={route.component} />
		{/each}
	</main>
</Router>
