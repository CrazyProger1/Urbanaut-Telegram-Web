const config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "8rem",
        },
        maxWidth: {
          "2xl": "1536px",
        },
      },
      blur: {
        xs: "2px",
        lg: "10px",
      },
      boxShadow: {
        volume: "0 0 10px 2px rgba(0, 0, 0, 0.5)",
        "difficulty-newbie": "3px 3px 5px 0px rgba(255, 255, 255, 0.5)",
        "difficulty-easy": "3px 3px 5px 0px rgba(0, 255, 0, 0.5)",
        "difficulty-medium": "3px 3px 5px 0px rgba(255, 255, 0, 0.5)",
        "difficulty-hard": "3px 3px 5px 0px rgba(255, 0, 0, 0.5)",
        "rank-newbie": "3px 3px 5px 0px rgba(255, 255, 255, 0.5)",
        "rank-stalker": "3px 3px 5px 0px rgba(255, 0, 0, 0.5)",
        "rank-legend": "3px 3px 5px 0px rgba(157, 0, 255, 0.5)",
      },
      dropShadow: {
        volume: "1px 1px 4px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        primary: ["Poppins", "GigaSans", "sans-serif"],
      },
      colors: {
        mdx: {
          heading: {
            1: "rgb(var(--color-mdx-heading-1))", // h1 color
            2: "rgb(var(--color-mdx-heading-2))", // h2 color
            3: "rgb(var(--color-mdx-heading-3))", // h3 color
            4: "rgb(var(--color-mdx-heading-4))", // h4 color
            5: "rgb(var(--color-mdx-heading-5))", // h5 color
            6: "rgb(var(--color-mdx-heading-6))", // h6 color
          },
          link: "rgb(var(--color-mdx-a))",
          list: {
            ul: "rgb(var(--color-mdx-ul))", // Unordered list color
            ol: "rgb(var(--color-mdx-ol))", // Ordered list color
          },
        },
        background: "rgb(var(--color-background-default))",
        foreground: "rgb(var(--color-foreground-default))",
        text: "rgb(var(--color-text-default))",
        selection: {
          border: "rgba(var(--color-selection-border), 0.35)",
          DEFAULT: "rgba(var(--color-selection-default), 0.3)",
        },
        disabled: "rgb(var(--color-variant-disabled))",
        variant: {
          danger: "rgb(var(--color-variant-danger))",
          disabled: "rgb(var(--color-variant-disabled))",
        },
      },
    },
  },
};

export default config;
