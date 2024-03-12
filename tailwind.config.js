/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom": "linear-gradient(#24292D 100%, #151A1E 100%)",
        "gradient-itemlist": "linear-gradient(gray 10%, white 100%)",
        "gradient-orange": "linear-gradient(#FE721A 100%, #FC9919 80%)",
        "gradient-gray": "linear-gradient(#FFFFFF 10%, #7E7E7E 90%)",
      },
      colors: {
        "black-c": "#24292D",
        "black-c-two": "#151A1E",
        "orange-c": "#FBA834",
        "custom-satu": "rgba(255, 255, 255, 0.15)"
      },
      fontFamily: {
        "Montserrat": ["Montserrat"]
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
};
