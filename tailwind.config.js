/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          DEFAULT: "#106EAD",
          50: "#81C6F3",
          100: "#6FBDF2",
          200: "#49ACEE",
          300: "#249BEB",
          400: "#1386D2",
          500: "#106EAD",
          600: "#0B4D7A",
          700: "#072D46",
          800: "#020C13",
          900: "#000000",
          950: "#000000",
        },
        secondary: {
          DEFAULT: "#C33C5E",
          50: "#EEC8D2",
          100: "#E9B9C5",
          200: "#E09AAB",
          300: "#D67A92",
          400: "#CD5B78",
          500: "#C33C5E",
          600: "#982F49",
          700: "#6D2235",
          800: "#421420",
          900: "#17070B",
          950: "#020101",
        },
        themeBlue: "#DFF4FF",
        themeGray: "#F4F4F5",
        facebook: "#3b5998",
        twitter: "#00acee",
        linkedin: "#0072b1",
        instagram: "#BD33B5",
        whatsapp: "#25d366",
        youtube: "#cd201f",
        pinterest: "#E60023",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-2deg)",
          },
          "50%": {
            transform: "rotate(2deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

