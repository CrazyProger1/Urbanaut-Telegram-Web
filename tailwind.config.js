/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "rgba(var(--background))",
      border: "rgba(var(--border))",
      card: "rgba(var(--card))",
      "copy-primary": "rgba(var(--copy-primary))",
      "copy-secondary": "rgba(var(--copy-secondary))",
      cta: "rgba(var(--cta))",
      "cta-active": "rgba(var(--cta-active))",
      "cta-text": "rgba(var(--cta-text))",
      red: "#C94F4F",

      grape: "rgba(var(--grape))",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
