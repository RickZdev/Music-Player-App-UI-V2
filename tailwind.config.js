/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7A8A',
        foreground: '#1D1F3E',
        background: '#111536',
        white: '#FFFFFF',
        black: '#0A0A0A',
        gray: '#404040'
      },
      fontFamily: {
        // fonts that are installed on assets/fonts folder
        OpenSansBold: 'OpenSans-Bold',
        OpenSansLight: 'OpenSans-Light',
        OpenSansRegular: 'OpenSans-Regular',
      }
    },
  },
  plugins: [],
}
