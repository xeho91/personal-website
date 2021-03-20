module.exports = {
	// https://svelte.dev/docs#svelte_compile
	compilerOptions: null,

	// an array of file extensions that should be treated as Svelte components
	extensions: [".svelte"],

	// https://github.com/sveltejs/svelte-preprocess
	preprocess: require("svelte-preprocess")({
		sourceMap: true,
		defaults: { style: "postcss" },
		postcss: require("./postcss.config.js"),
	}),
};
