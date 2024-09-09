/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		function ({ addVariant }) {
			addVariant(
				'prose-inline-code',
				'&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))',
			);
		},
	],
};
