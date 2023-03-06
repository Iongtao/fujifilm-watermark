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
	rules: {
		'@typescript-eslint/no-var-requires': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
