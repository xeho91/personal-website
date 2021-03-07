var sveltePreprocess = require("svelte-preprocess");
var postCSSconfig = require("./postcss.config.js");

module.exports = {
	preprocess: sveltePreprocess({
		sourceMap: true,
		defaults: { style: "postcss" },
		postcss: postCSSconfig,
	}),
};
