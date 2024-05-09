/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'custom-teal': '#126018', // Definir un color personalizado 'custom-teal'
        },
      },
    },
    plugins: [],
  }