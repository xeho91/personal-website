module.exports = {
	plugins: [
		// https://github.com/csstools/postcss-preset-env
		require("postcss-preset-env")({
			stage: 1,
			features: {
				// https://preset-env.cssdb.org/features
			},
		}),

		// https://github.com/postcss/autoprefixer
		require("autoprefixer"),
	],
};
