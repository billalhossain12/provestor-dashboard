import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
	{
		settings: { react: { version: 'detect' } },

		ignores: ['**/node_modules/', './dist'],

		languageOptions: { globals: globals.browser },

		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

		rules: {
			'no-unused-vars': 'error',
			'no-undef': 'error',
			'no-console': 'warn',
			'no-unused-expressions': 'error',
			'prefer-const': 'error',
		},
	},

	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
];
