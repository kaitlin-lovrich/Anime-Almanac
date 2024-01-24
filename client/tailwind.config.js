/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{html,ts,tsx,js,jsx}',
    './src/components/**/*.{html,ts,tsx,js,jsx}',
    './src/**/*.{html,ts,tsx,js,jsx}',
    './index.html',
  ],
  theme: {
    fontFamily: {
      heading: ['"Russo One"', 'serif'],
      body: ['"Source Sans 3"', 'sans-serif'],
      special: ['"Ruslan Display"', 'serif'],
    },
    backgroundImage: {
      'custom-gradient':
        'linear-gradient(#4E3636 10%, #775A5A 50%, #4E3636 90%)',
    },
    extend: {},
  },
  plugins: [],
};
