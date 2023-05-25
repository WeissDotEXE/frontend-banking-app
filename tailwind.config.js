/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                pink: {
                    950: "#E10075",
                    940: "#FF00B8",
                    disable: "#F07BB8",
                },
                blue: {
                    940: "#3282B8",
                    950: "#1B262C",
                    960: "#000AFF",
                },
                red: {
                    950: "#F51A1A",
                },
                white: {
                    950: "#FFFFFF",
                },
                gray: {
                    950: "#8F8F8F",
                    940: "#D9D9D9",
                },
                green: {
                    950: "#029E24",
                },
                yellow: {
                    950: "#FFA200",
                },
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
