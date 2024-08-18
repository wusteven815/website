import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto400: "repeat(auto-fit, minmax(400px, 1fr))",
      },
      screens: {
        lg: "600px",
        gridlg: "1000px",
      },
    },
  },
  plugins: [],
};

export default config;
