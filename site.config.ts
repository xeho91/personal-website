export const METADATA = {
	name: "xeho91",
	author: "xeho91",
	shortDescription: "personal website",
	sourceCode: "https://github.com/xeho91/personal-website",
	image: {
		og: {
			url: "/images/xeho91-logo.png",
			alt: "It contains xeho91's logotype painted in the style of quickly using a paintbrush on the wall. It's written 'xeho91' here in capital letters.",
		},
		twitter: {
			url: "/images/xeho91-avatar.png",
			alt: "It contains xeho91's logomark - which is a letter 'X' in the circle with a frame. The letter painted in the style of quickly using a paintbrush on the wall.",
		},
	},
};

export const BRAND_ASSETS = {
	favicon: "/images/xeho91-avatar.svg",
	profile: "/images/xeho91-profile.webp",
	fonts: {
		monospace: "/fonts/monospace/JetBrainsMono-subset.woff2",
		sansSerif: "/fonts/sans-serif/WorkSans-subset.woff2",
		serif: "/fonts/serif/Fraunces-subset.woff2",
	},
};

import iconGitHub from "@iconify-icons/simple-icons/github.js";
import iconTwitter from "@iconify-icons/simple-icons/twitter.js";
import iconLinkedin from "@iconify-icons/simple-icons/linkedin.js";

export const CONNECT_PROFILES = [
	{
		name: "GitHub",
		url: "https://github.com/xeho91",
		icon: iconGitHub,
	},
	{
		name: "Twitter",
		url: "https://twitter.com/xeho91",
		icon: iconTwitter,
	},
	{
		name: "Linkedin",
		url: "https://linkedin.com/in/xeho91",
		icon: iconLinkedin,
	},
];

export default {
	METADATA,
	BRAND_ASSETS,
	CONNECT_PROFILES,
};
