module.exports = {
	// https://github.com/okonet/lint-staged#lintstagedrc-example

	"**/*.css": ["pnpm lint:css"],
	"**/*.js": ["pnpm lint:js"],
	"**/*.svelte": ["pnpm lint:svelte"],
	"**/*.md": ["pnpm lint:md"],
};
