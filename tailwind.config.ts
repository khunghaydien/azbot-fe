import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SF Pro Display', 'system-ui', 'sans-serif'],
        'display': ['SF Pro Display', 'system-ui', 'sans-serif'],
      },
      screens: {
        'md': '768px',
      },
      colors: {
        "text-base": "var(--text-base)",
        "text-description": "var(--text-description)",
        "primary": "var(--primary)",
      },
    },
  },
  plugins: [],
};
export default config;
