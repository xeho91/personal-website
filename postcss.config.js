module.exports = {
	plugins: [
		// https://github.com/postcss/postcss-url
		require("postcss-url")(),

		// https://github.com/csstools/postcss-preset-env
		require("postcss-preset-env")({
			stage: 1,
			features: {
				// https://preset-env.cssdb.org/features
				// "nesting-rules": true,
			},
		}),

		// https://github.com/postcss/autoprefixer
		require("autoprefixer"),
	],
};
