/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	root: "../",

	// extends: "",

	exclude: ["**/node_modules/**/*"],

	mount: {
		"../source": {
			url: "/",
			static: false,
			resolve: true,
		},
	},

	alias: {},

	plugins: [
		// https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-svelte
		["@snowpack/plugin-svelte", { /* options */ }]
	],

	devOptions: {
		secure: true,
		hostname: "localhost",
		// port: 8080,
		// fallback: "index.html",
		open: "**Default**",
		output: "dashboard",
		hmr: true,
		hmrDelay: 0,
		// hmrPort: 8080,
		hmrErrorOverlay: true,
		out: "/build",
	},

	packageOptions: {
		external: ["fs"],
		source: "local",
		// knownEntrypoints: [""],
		polyfillNode: false,
		// env: {
		// 	[ENV_NAME: string]: (string true),
		// },
		// packageLookupFields: [""],
		// packageExportLookupFields: [""],
		// rollup: {},
	},

	buildOptions: {
		out: "../build",
		baseUrl: "../",
		clean: true,
		metaUrlPath: "__snowpack__",
		sourcemap: false,
		watch: false,
		htmlFragments: true,
		// jsxFactory: "",
		// jsxFragment: "",
	},

	testOptions: {
		// files: [""],
	},
};
