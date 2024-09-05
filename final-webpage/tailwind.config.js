/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ["Poppins", "sans-serif"],
        "Raleway": ["Raleway", "sans-serif"],
      },
      colors: {
        'custom-green': '#639F3F',
        'custom-blue': '#334FD9',
        'custom-dark-blue': '#445CCA',
        'custom-yellow': '#FBE525',
      },
    },
  },
  plugins: [],
}

