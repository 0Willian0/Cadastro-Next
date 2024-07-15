import type { Config } from "tailwindcss";

const config: Config = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
      {pattern: /(from|to)-(green|blue|gray)-(400|700)/}
    ],
  theme: {
    extend: {
      backgroundImage: {

      },
    },
  },
  plugins: [],
};
export default config;
