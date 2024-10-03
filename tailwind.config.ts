import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
        'xs': '98%',
        'sm': '98%',
        'md': '880px',
        'lg': '1024px',
        'xl': '1170px',
      },
    extend: {
      colors: {
        'orange-normal': '#eb8307',
        'green-rating' : '#6c3'
      },
      container: {
        center: true,
        'padding': {
          DEFAULT: '1rem',
          lg: '0.625rem'
        }
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
