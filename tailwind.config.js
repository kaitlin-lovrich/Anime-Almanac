/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
    theme: {
        fontFamily: {
            heading: ['"Russo One"', "serif"],
            body: ['"Source Sans 3"', "sans-serif"],
            special: ['"Ruslan Display"', "serif"],
        },
        backgroundImage: {
            "custom-gradient-3":
                "linear-gradient(#4E3636 10%, #775A5A 50%, #4E3636 90%)",
            "custom-gradient-2":
                "linear-gradient(rgb(78,54,54), rgba(78,54,54,.95))",
        },
        boxShadow: {
            "custom-inset":
                "inset -7px 0 5px rgba(0, 0, 0, 0.2), inset 7px 0 5px rgba(0, 0, 0, 0.2), inset 0 -7px 5px rgba(0, 0, 0, 0.2)",
            "custom-drop": "0 10px 35px rgba(0,0,0,.45)",
        },
        extend: {},
    },
    plugins: [],
};
