const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      "colors": {
       "black": "#101010",
       "medium-black": "#1e1e1e",
       "light-black": "#3c3c3c",
       "blue": "#0063b1",
       "light-blue": "#ccdbe7",
       "medium-white": "#f0f0f0",
       "light-white": "#fafafa",
       "white": "#f5f5f5",
       "gray": "#686868",
       "medium-gray": "#c4c4c4",
       "light-gray": "#d6d6d6"
      },
      "fontSize": {
       "xs": "0.75rem",
       "sm": "0.875rem",
       "base": "1rem",
       "lg": "1.5rem",
       "xl": "2.25rem"
      },
      "fontFamily": {
       "dm-sans": ['DM Sans', ...defaultTheme.fontFamily.sans],
       "roboto": ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      "borderRadius": {
       "none": "0",
       "xs": "0.25rem",
       "sm": "0.5rem",
       "default": "1rem",
       "lg": "1.5rem"
     }
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
}
