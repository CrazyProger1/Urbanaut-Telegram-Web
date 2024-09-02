/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        boxShadow: {
            frame: '2px 2px 4px var(--tw-shadow-color)',
        },
        colors: {
            background: "rgba(var(--background))",
            foreground: "rgba(var(--foreground))",

            text: "rgba(var(--text))",

            selection: "rgba(var(--selection))",
            "selection-border": "rgba(var(--selection-border))",

            delete: "rgba(var(--delete))",

            "shadow-first": "rgba(var(--shadow-first))",
        },
        extend: {
            fontFamily: {
                primary: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
