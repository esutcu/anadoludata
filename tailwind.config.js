/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./components/**/*.{js,vue,ts}",
	  "./layouts/**/*.vue",
	  "./pages/**/*.vue",
	  "./plugins/**/*.{js,ts}",
	  "./app.vue",
	],
	theme: {
	  extend: {
		colors: {
		  "anadolu-teal": "#0F666D",
		  "anadolu-beige": "#C5B582",
		  "anadolu-navy": "#023756",
		  "anadolu-gold": "#958E62"
		}
	  }
	},
	plugins: []
  }