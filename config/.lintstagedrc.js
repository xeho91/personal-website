module.exports = {
	// https://github.com/okonet/lint-staged#lintstagedrc-example

	"**/*.css": ['stylelint --config "./config/.stylelintrc.js"'],
	"**/*.js": ['eslint --config "./config/.eslintrc.js"'],
	"**/*.md": ['markdownlint --config "./config/.markdownlint.json"'],
};
