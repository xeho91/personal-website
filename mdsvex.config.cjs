/** @type { import("mdsvex").MdsvexOptions } */
module.exports = {
	// https://github.com/pngwn/mdsvex
	extensions: [".svx"],

	smartypants: {
		dashes: "oldschool",
	},

	remarkPlugins: [
		[
			require("remark-github"),
		],
		require("remark-abbr"),
	],

	rehypePlugins: [
		require("rehype-slug"),
		[
			require("rehype-autolink-headings"),
			{
				behavior: "wrap",
			},
		],
	],
};
