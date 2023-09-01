/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1000px',

			lgd: { min: '1200px', max: '1350px' },
			// => @media (min-width: 1024px) { ... }

			xl: '1700px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
			xsm: { max: '479px' },
		},
		extend: {},
	},
	plugins: [],
};
