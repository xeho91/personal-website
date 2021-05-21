module.exports = {
	"**/*.css": ["stylelint"],
	"**/*.js": ["eslint"],
	"**/*.svelte": ["svelte-check", "eslint", "stylelint"],
	"**/*.svx": ["eslint", "stylelint", "markdownlint"],
	"**/*.md": ["markdownlint"],
};
