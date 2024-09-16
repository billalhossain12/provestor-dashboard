import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: '#24B24B',
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				openSans: ['Open Sans', 'sans-serif'],
			},
			boxShadow: {
				'custom': '0px 0px 10px 0px rgba(0, 0, 0, 0.08)',
			},
		},
	},
	plugins: [],
});
