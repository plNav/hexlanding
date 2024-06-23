/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
	  './public/**/*.html',
	],
	theme: {
	  extend: {
		colors: {
		  primary: '#6b5b95', // purple
		  secondary: '#feca57', // gold
		  background: '#1a1a1a', // dark background
		  accent: '#FF7d794', // gold accent
		},
	  },
	},
	plugins: [],
  }
  
  