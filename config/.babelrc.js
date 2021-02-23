/** @type { import("@babel/core").TransformOptions } */
module.exports = {
	// https://babeljs.io/docs/en/next/options
	presets: [
		[
			// https://babeljs.io/docs/en/babel-preset-env.html
			"@babel/preset-env",
			{
				targets: {
					node: "current",
				},
			},
		],
	],

	sourceMaps: "both",
	sourceRoot: "./source",

	minified: false,
};
