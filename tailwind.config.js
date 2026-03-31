/** @type {import('tailwindcss').Config} */


// tailwind.config.js
//const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme') 


module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  mode: 'jit',
  theme: {
    
    screens: {
      'sm': '40rem',
      // => @media (min-width: 640px) { ... }

      'md': '48rem',
      // => @media (min-width: 680px) { ... }

      'lg': '64rem',
      // => @media (min-width: 1024px) { ... }

      'xl': '80rem',
      // => @media (min-width: 1280px) { ... }

      '2xl': '96rem',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: { 
      "arrow": ['Murecho'],
      'sans': ['Inter'],
      "pancake": ['Pancake'],
      "jellybean": ['Jellybean'],
      },

    extend: {
      //backgroundOpacity: ['active'],
    },
  },
    content: [
      "./*.{html,css,js}",
      "./**/*.{html,css,js}",
      "!./node_modules/**",
      "./node_modules/flowbite/**/*.js"
  ],

    
  }//,
  //experimental: {
  // optimizeUniversalDefaults: true
  //}

