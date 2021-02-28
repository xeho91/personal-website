var sveltePreprocess = require("svelte-preprocess");

var postCSSconfig = require("./config/postcss.config.js");

module.exports = {
	preprocess: sveltePreprocess({
		defaults: { style: "postcss" },
		postcss: postCSSconfig,
	}),
};
