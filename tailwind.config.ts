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
      },
      blur: {
        "2px": "2px",
        "10px": "10px",
      },
      boxShadow: {
        "volume-frame": "0 0 10px 2px rgba(0, 0, 0, 0.5)",
        "difficulty-frame-newbie": "3px 3px 5px 0px rgba(255, 255, 255, 0.5)",
        "difficulty-frame-easy": "3px 3px 5px 0px rgba(0, 255, 0, 0.5)",
        "difficulty-frame-medium": "3px 3px 5px 0px rgba(255, 255, 0, 0.5)",
        "difficulty-frame-hard": "3px 3px 5px 0px rgba(255, 0, 0, 0.5)",
        "rank-frame-newbie": "3px 3px 5px 0px rgba(255, 255, 255, 0.5)",
        "rank-frame-stalker": "3px 3px 5px 0px rgba(255, 0, 0, 0.5)",
        "rank-frame-legend": "3px 3px 5px 0px rgba(157,0,255, 0.5)",
      },
      fontFamily: {
        primary: ["Poppins", "GigaSans"],
      },
      colors: {
        background: {
          DEFAULT: "rgba(var(--color-background-default))",
        },
        foreground: {
          DEFAULT: "rgba(var(--color-foreground-default))",
        },
        text: {
          DEFAULT: "rgba(var(--color-text-default))",
        },
        selection: {
          border: "rgba(var(--color-selection-border), 0.35)",
          DEFAULT: "rgba(var(--color-selection-default), 0.3)",
        },
        state: {
          success: {
            darkest: "var(--color-state-success-darkest)",
            dark: "var(--color-state-success-dark)",
            DEFAULT: "var(--color-state-success-default)",
            light: "var(--color-state-success-light)",
            lightest: "var(--color-state-success-lightest)",
          },
          warning: {
            dark: "var(--color-state-warning-dark)",
            DEFAULT: "var(--color-state-warning-default)",
            light: "var(--color-state-warning-light)",
          },
          error: {
            darkest: "var(--color-state-error-darkest)",
            dark: "var(--color-state-error-dark)",
            DEFAULT: "var(--color-state-error-default)",
            light: "var(--color-state-error-light)",
            lightest: "var(--color-state-error-lightest)",
          },
        },
      },
    },
  },
};

export default config;
