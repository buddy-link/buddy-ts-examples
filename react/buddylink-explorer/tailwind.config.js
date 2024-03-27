/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        primary: '#F5D473',
        "primary-dark": "#413E33",
      },
    },
  },
  plugins: [],
}

