var postCSSurl = require("postcss-url");
var postCSSpresetEnv = require("postcss-preset-env");

module.exports = {
	plugins: [
		// https://github.com/postcss/postcss-import
		// postCSSimport(),

		// https://github.com/postcss/postcss-url
		postCSSurl(),

		// https://github.com/csstools/postcss-preset-env
		postCSSpresetEnv({
			stage: 2,
			features: {
				// https://preset-env.cssdb.org/features
				"nesting-rules": true,
			},
		}),
	],
};
