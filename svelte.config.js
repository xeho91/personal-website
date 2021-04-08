// var path = require("path");

module.exports = {
	// https://svelte.dev/docs#svelte_compile
	compilerOptions: null,

	// an array of file extensions that should be treated as Svelte components
	extensions: [".svelte", ".svx"],

	preprocess: [
		// https://github.com/sveltejs/svelte-preprocess
		require("svelte-preprocess")({
			// sourceMap: true, // Not supported yet(?)
			emitCss: true,
			defaults: { style: "postcss" },
			postcss: require("./postcss.config.js"),
		}),
		// https://github.com/pngwn/MDsveX
		require("mdsvex").mdsvex({
			extensions: [".svelte", ".svx"],
			smartypants: true,
			// layout: path.resolve("./src/pages/_layout.svelte"),
			remarkPlugins: [
				require("remark-slug"),
				require("remark-autolink-headings"),
			],
		}),
	],
};
