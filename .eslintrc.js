module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		tsconfigRootDir: __dirname,
		project: ['tsconfig.json'],
	},
	plugins: ['react'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-non-null-assertion': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'warn',
		"@typescript-eslint/no-non-null-assertion": "off"
	},
}
