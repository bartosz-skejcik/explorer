/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#101010",
                    light: "#E3E2E3",
                    dark: "#2A282A",
                },
            },
            backgroundImage: {
                blur: "url(/images/blur-background.svg)",
            },
            fontSize: {
                xxs: "10px",
            },
        },
    },
    plugins: [],
};
