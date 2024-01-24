/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{html,ts,tsx,js,jsx}',
    './src/components/**/*.{html,ts,tsx,js,jsx}',
    './src/**/*.{html,ts,tsx,js,jsx}',
    './src/index.html',
  ],
  theme: {
    fontFamily: {
      heading: ['"Russo One"', 'serif'],
      body: ['"Source Sans 3"', 'sans-serif'],
      special: ['"Ruslan Display"', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
