/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	root: "../",

	exclude: ["**/node_modules/**/*"],

	mount: {
		"../source": {
			url: "/",
			static: false,
			resolve: true,
		},
		"../public": {
			url: "/",
			static: true,
			resolve: true,
		},
	},

	alias: {
		$public: "../public",
		$source: "../source",
		$components: "../source/components",
		$routes: "../source/routes",
	},

	plugins: [
		// https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-svelte
		[
			"@snowpack/plugin-svelte",
			{
				// configFilePath: "./config/svelte.config.js",
			},
		],
		// https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-postcss#readme
		[
			"@snowpack/plugin-postcss",
			{
				config: "./config/postcss.config.js",
			},
		],
		// https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-run-script#readme
		[
			"@snowpack/plugin-run-script",
			{
				cmd: "svelte-check --output human",
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
		output: "dashboard",
		hmr: true,
		hmrDelay: 0,
		hmrErrorOverlay: true,
		out: "/build",
	},

	packageOptions: {
		external: require("module").builtinModules,
		source: "local",
		knownEntrypoints: [],
		polyfillNode: false,
		// env: {
		// 	[ENV_NAME: string]: (string true),
		// },
		packageLookupFields: ["svelte"],
		packageExportLookupFields: ["svelte"],
		// rollup: {},
	},

	buildOptions: {
		out: "../build",
		baseUrl: "../",
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
