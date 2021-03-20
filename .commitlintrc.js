/** @type { import("@commitlint/types/lib").UserConfig } */
module.exports = {
	// https://github.com/conventional-changelog/commitlint/
	extends: ["@commitlint/config-conventional"],

	/** @type { import("@commitlint/types/lib").RulesConfig } */
	rules: {
		"scope-case": [0],
	},
};
