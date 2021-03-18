/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	root: "./",

	exclude: ["**/node_modules/**/*"],

	mount: {
		"./public": {
			url: "/",
			static: true,
			resolve: true,
		},
		"./source": {
			url: "/assets/",
			static: false,
			resolve: true,
		},
	},

	alias: {
		$public: "./public",
		$icons: "./public/assets/images/icons",
		$source: "./source",
		$components: "./source/components",
		$routes: "./source/routes",
		$library: "./source/styles/library",
	},

	plugins: [
		// https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-svelte
		["@snowpack/plugin-svelte", {}],

		// https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-postcss#readme
		["@snowpack/plugin-postcss", {}],

		// https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-run-script#readme
		[
			"@snowpack/plugin-run-script",
			{
				// https://www.npmjs.com/package/svelte-check
				cmd: "svelte-check --output human-verbose --threshold warning",
				watch: "$1 --watch",
				output: "dashboard",
			},
		],
	],

	devOptions: {
		secure: true,
		hostname: "localhost",
		port: 8080,
		open: "none",
		output: "stream",
		hmr: true,
		hmrDelay: 0,
		hmrErrorOverlay: true,
		out: "/build",
	},

	packageOptions: {
		// Use all of the builtin modules from Node.JS
		external: require("module").builtinModules,
		source: "local",
		// knownEntrypoints: [],
		polyfillNode: false,
		packageLookupFields: ["svelte"],
		packageExportLookupFields: ["svelte"],
	},

	buildOptions: {
		out: "./build",
		baseUrl: "./",
		clean: true,
		metaUrlPath: "__snowpack__",
		sourcemap: true,
		watch: false,
		htmlFragments: false,
	},

	testOptions: {
		// files: [""],
	},
};
