import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing:{
        '128':'28rem',
        '256':'46rem',
        '97': '22rem',
        '129':'31rem'
      },
  
    },
  },
  plugins: [],
};
export default config;
