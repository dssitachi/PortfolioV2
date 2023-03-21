/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-text': '#7DF9FF',
        'my-bg': '#0a192f'
      },
    },
  },
  plugins: [],
}
