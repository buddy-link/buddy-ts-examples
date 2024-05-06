import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
			screens: {
				"3xl": "1920px",
			},
			colors: {
				primary: "#FFB780",
				"primary-light": "#F9E5D8",
				"primary-lighter": "#FCF4EE",
				"primary-dark": "#FF9B61",
				secondary: "#FF9D85",
				"secondary-lighter": "#FCF0EE",
				"secondary-dark": "#FF8476",
				"primary-text-dark": "#4C322E",
				"primary-text-light": "#C38B88",
				"primary-text-lighter": "#FACCBA",
				"accent-text": "#9DBDFF",
				"accent-text-dark": "#525E66",
			},
		},
	},
	plugins: [],
};
export default config;
