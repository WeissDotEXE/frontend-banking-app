/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                pink: {
                    950: "#E10075",
                    disable: "#F07BB8",
                },
                blue: {
                    940: "#3282B8",
                    950: "#1B262C",
                },
                red: {
                    950: "#F51A1A",
                },
                white: {
                    950: "#FFFFFF",
                },
                gray: {
                    950: "#8F8F8F",
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
