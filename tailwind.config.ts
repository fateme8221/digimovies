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
        'orange-normal':'#eb8307'
      },
      container: {
        center: true,
        'padding': {
          DEFAULT: '1rem',
          lg: '0.625rem'
        }
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1170px',
      },
      fontFamily: {
        "dana": "dana",
        "danaMedium": "dana Medium",
        "danaDemiBold": "dana DemiBold",
        "moraddaLight": "moradda Light",
        "moraddaMeduim": "moradda Meduim",
        "moraddaBold": "moradda Bold"
      },
    },
  },
  plugins: [],
};
export default config;
