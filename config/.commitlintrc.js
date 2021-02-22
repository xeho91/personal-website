/** @type { import("@commitlint/types/lib").UserConfig } */
module.exports = {
	// https://github.com/arvinxx/gitmoji-commit-workflow
	extends: ["gitmoji"],

	rules: {
		"scope-case": [0, "always", "start-case"],
	},
};
