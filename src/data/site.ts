export const SITE_METADATA = {
	name: "xeho91",
	sourceCode: "https://github.com/xeho91/personal-website",
};

export const SITE_BRAND_ASSETS = {
	favicon: "@xeho91/avatar/build/minified/xeho91-avatar.svg",
	logo: {
		normal: "@xeho91/logo/build/minified/xeho91-logo.svg",
		animated: "@xeho91/logo/build/minified/xeho91-logo.animated.svg",
	},
	fonts: "@xeho91/fonts/dist",
};

import iconGitHub from "@iconify-icons/simple-icons/github.js";
import iconTwitter from "@iconify-icons/simple-icons/twitter.js";
import iconLinkedin from "@iconify-icons/simple-icons/linkedin.js";

export const CONNECT_PROFILES = [
	{
		name: "GitHub",
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

export default {
	SITE_METADATA,
	SITE_BRAND_ASSETS,
	CONNECT_PROFILES,
};