var postCSSURL = require("postcss-url");
var postCSSnesting = require("postcss-nesting");

module.exports = {
	plugins: [
		// https://github.com/postcss/postcss-url
		postCSSURL(),
		// https://github.com/jonathantneal/postcss-nesting
		postCSSnesting(),
	],
};
