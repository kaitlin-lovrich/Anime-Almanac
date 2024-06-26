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
            "custom-gradient-6":
                "linear-gradient(rgba(50, 30, 30), rgb(119, 90, 90))",
            "custom-gradient-5":
                "linear-gradient(rgba(78, 54, 54), rgba(78, 54, 54, 0))",
            "custom-gradient-4":
                "linear-gradient(rgba(50, 30, 30), rgb(78, 54, 54))",
            "custom-gradient-3":
                "linear-gradient(rgb(50, 30, 30) 16%, rgb(119, 90, 90) 50%, rgb(50, 30, 30) 84%)",
            "custom-gradient-2":
                "linear-gradient(rgb(78, 54, 54), rgba(78, 54, 54, .95))",
            "custom-gradient-1":
                "linear-gradient(rgba(78, 54, 54, .95), rgb(78, 54, 54))",
        },
        boxShadow: {
            "custom-inset":
                "inset -7px 0 5px rgba(0, 0, 0, 0.2), inset 7px 0 5px rgba(0, 0, 0, 0.2), inset 0 -7px 5px rgba(0, 0, 0, 0.2)",
            "custom-drop": "0 10px 35px rgba(0, 0, 0, .45)",
        },
        extend: {
            colors: {
                "custom-white": "rgb(229, 229, 229)",
                "custom-gray": "rgb(176, 176, 176)",
            },
        },
    },
    plugins: [],
};
