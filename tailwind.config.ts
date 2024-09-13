import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        text: "var(--color-text)",
      },
    },
  },
  plugins: [],
};

export default config;
