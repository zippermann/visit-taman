/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'tt-teal': '#44878c',
				'tt-lightteal': '#95c1c5',
				'tt-darkteal': '#2f5e61',
				'tt-yellow': '#f7dd8a',
				'tt-green': '#82aa59',
				'tt-lightgreen': '#becc7b'
			}
		},
	},
	plugins: [],
}
