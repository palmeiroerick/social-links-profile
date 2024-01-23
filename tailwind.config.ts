import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      /* Primary */
      green: "hsl(75, 94%, 57%)",

      /* Neutral */
      white: "hsl(0, 0%, 100%)",
      grey: "hsl(0, 0%, 20%)",
      darkGrey: "hsl(0, 0%, 12%)",
      offBlack: "hsl(0, 0%, 8%)",
    },
    fontWeight: {
      normal: "400",
      semibold: "600",
      bold: "700",
    },
  },
  plugins: [],
};
export default config;
