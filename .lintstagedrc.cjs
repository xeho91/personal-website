module.exports = {
	"**/*.css": ["stylelint"],
	"**/*.js": ["eslint"],
	"**/*.svelte": ["svelte-check", "eslint", "stylelint"],
	"**/*.md": ["markdownlint"],
};
