/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #AE93FF 50.66%, #F996FF 103.76%)',
      },
    },
  },
  plugins: [],
}