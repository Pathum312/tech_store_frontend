/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				cursive: ['cursive'],
				whisper: ['whisper']
			},
			colors: {
				primary: '#CCA7A2',
				secondary: '#AA9FB1'
			},
			fontSize: {
				title: 'clamp(1.125rem, 0.9078rem + 1.0858vi, 1.75rem)'
			},
			width: {
				paragraphs: '60ch',
				sidebar: 'min(10%, 5rem)',
				'sidebar-hover': 'min(15%, 20rem)'
			}
		},
	},
	plugins: [],
};
