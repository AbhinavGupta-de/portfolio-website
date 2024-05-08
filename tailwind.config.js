/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xsm: { max: '479px' },

			sm: '640px',

			md: '768px',

			lg: '1000px',

			lgd: { min: '1200px', max: '1350px' },

			xl: '1700px',

			'2xl': '1536px',
		},
		extend: {},
	},
	plugins: [],
};
