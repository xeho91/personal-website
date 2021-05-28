import { writable } from "svelte/store";

export const expandedElements = writable({
	navs: {
		connect: false,
	},
});

export const map = writable({
	hidden: true,
	showCountry: "",
});

