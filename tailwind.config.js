/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
    `./src/content-modules/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '960px',
      lg: '1216px',
      xl: '1536px',
    },
    fontSize: {
      xs: '.875rem',
      sm: '1rem',
      tiny: '1.125rem',
      base: '1.25rem',
      lg: '1.5rem',
      xl: '1.875rem',
      '2xl': '2.25rem',
      '3xl': '3rem',
      '4xl': '3.75rem',
      '5xl': '4.5rem',
      '6xl': '6rem',
    },
    extend: {
      lineHeight: {
        12: '7.5rem',
        11: '5.625rem',
        10: '4.5rem',
        9: '3.75rem',
        8: '2.75rem',
        7: '2.375rem',
        6: '1.875rem',
        5: '1.625rem',
        4: '1.5rem',
        3: '1.375rem',
        2: '1.25rem',
        1: '1.125rem',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#10351E',
          dark: '#004E25',
          mid: '#007635',
          apple: '#27A737',
          lime: '#95C236',
          acid: '#DBDF58',
          bistre: '#999',
        },
        secondary: {
          DEFAULT: '#231f20',
        },
        alabaster: {
          DEFAULT: '#F2F0E8',
        },
        error: {
          DEFAULT: '#CA131E',
        },
        success: {
          DEFAULT: '#27A737',
        },
        selection: {
          DEFAULT: '#DBDF58',
        },
      },
    },
  },
  plugins: [],
};
