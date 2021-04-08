export var SITE_METADATA = {
	sourceCode: "https://github.com/xeho91/personal-website",
	name: "xeho91",
};

export var SITE_BRAND_ASSETS = {
	faviconPath: "@xeho91/avatar/build/minified/xeho91-avatar.svg",
	logoPath: "@xeho91/logo/build/minified/xeho91-logo.svg",
	logoAnimatedPath: "@xeho91/logo/build/minified/xeho91-logo.animated.svg",
	fontsPath: "@xeho91/fonts/dist",
};

export var SITE_NAVIGATION_LINKS = [
	{
		url: "/about",
		label: "About me",
		description: "Get to know a little about my persona",
	},
	{
		url: "/contact",
		label: "Contact me",
		description: "Available ways to get in touch with me",
	},
	{
		url: "/resume",
		label: "Resume",
		description: "Access and preview my resume",
	},
];

export var SOCIAL_MEDIA_PROFILES = [
	{
		name: "GitHub",
		url: "https://github.com/xeho91/",
		icon: import("@iconify-icons/simple-icons/github.js"),
	},
	{
		name: "Twitter",
		url: "https://twitter.com/xeho91/",
		icon: import("@iconify-icons/simple-icons/twitter.js"),
	},
	{
		name: "Linkedin",
		url: "https://linkedin.com/in/xeho91/",
		icon: import("@iconify-icons/simple-icons/linkedin.js"),
	},
];

export default {
	SITE_METADATA,
	SITE_BRAND_ASSETS,
	SITE_NAVIGATION_LINKS,
	SOCIAL_MEDIA_PROFILES,
};
