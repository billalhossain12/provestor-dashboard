/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: '#24B24B',
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				openSans: ['Open Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
