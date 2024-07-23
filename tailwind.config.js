/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundColorOpacity: {
        enabled: true,
        values: {
          '10': '0.1',
          '20': "0.2",
          '30': '0.3',
        }
      }
    },
  },
  plugins: [],
}