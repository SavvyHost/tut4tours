import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0057be',
        'primary-light': '#2a7bed',
        'accent-white': '#FFFFFF',
        'accent-yellow': '#FFEC4E',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(82deg, #945E13 0%, #CFB758 100%)",
      },
      fontFamily: {
        'segoe': ['Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'special-offer': ['36px', {
          lineHeight: '47.88px',
        }],
      },
      fontWeight: {
        'semi-bold': '600',
      },
      textShadow: {
        custom: '0.0625rem 0 0.625rem #000',
      },
    },
  },
  plugins: [],
};

export default config;