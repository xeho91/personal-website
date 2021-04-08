// eslint-disable-next-line node/file-extension-in-import
import { writable } from "svelte/store";

export const expandedNavs = writable({});

export const mapVisible = writable(false);
export const mapShowCountry = writable("");
