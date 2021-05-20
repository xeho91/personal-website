const rulesFromStylelint = {
	// https://stylelint.io/user-guide/rules/list

	"selector-pseudo-class-no-unknown": [true, {
		ignorePseudoClasses: ["global"]
	}],

	"at-rule-no-unknown": [true, {
		ignoreAtRules: ["define-mixin", "mixin"]
	}]
};

const rulesFromPlugins = {
	"order/properties-order": [[], { severity: "warning" }],
	"plugin/rational-order": [
		true,
		{
			"border-in-box-model": false,
			"empty-line-between-groups": true,
			"severity": "warning",
		},
	],
	"a11y/media-prefers-reduced-motion": null,
};

/** @type { import("stylelint").Configuration } */
module.exports = {
	extends: [
		// https://github.com/stylelint/stylelint-config-standard
		"stylelint-config-recommended",

		// https://github.com/constverum/stylelint-config-rational-order
		"stylelint-config-rational-order",

		// https://github.com/YozhikM/stylelint-a11y
		"stylelint-a11y/recommended",

		// https://github.com/darwintantuco/stylelint-8-point-grid
		"stylelint-8-point-grid",

		// https://github.com/prettier/stylelint-config-prettier
		"stylelint-config-prettier",
	],

	plugins: [
		// https://github.com/constverum/stylelint-config-rational-order
		"stylelint-config-rational-order/plugin",

		// https://github.com/sh-waqar/stylelint-declaration-use-variable
		"stylelint-declaration-use-variable",

		// https://github.com/YozhikM/stylelint-a11y
		"stylelint-a11y",

		// https://github.com/darwintantuco/stylelint-8-point-grid
		"stylelint-8-point-grid",
	],

	rules: {
		...rulesFromStylelint,
		...rulesFromPlugins,
	},
};
