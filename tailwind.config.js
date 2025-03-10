/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                // Define a custom range for 1024px to 1670px
                "1024-1870": { min: "1024px", max: "1870px" },
            },
            animation: {
                slideInLeft: "slideInLeft 1s ease-out",
                slideInRight: "slideInRight 1s ease-out",
                slideUp: "slideUp 1s ease-out forwards",
                float: "float 3s ease-in-out infinite",
            },
            keyframes: {
                slideInLeft: {
                    "0%": { transform: "translateX(-100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideInRight: {
                    "0%": { transform: "translateX(100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(100%)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
    },
    plugins: [],
};
