/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{ts,html,css,scss}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#DDEEFD",
          100: "#BBDDFB",
          200: "#8EC7F8",
          300: "#55ABF5",
          400: "#1D8FF2",
          500: "#1A81DA",
          600: "#166BB5",
          700: "#135D9D",
          800: "#0D406D",
          900: "#07243C",
        },
        secondary: {
          50: "#FDF4E3",
          100: "#FBE9C7",
          200: "#F8D9A1",
          300: "#F5C772",
          400: "#F2B443",
        },
        neutral: {
          50: "#F8F9FA",
          100: "#E7EDF2",
          200: "#C0C8CF",
          300: "#A4AFB9",
          400: "#8A98A4",
          500: "#76818B",
          600: "#586C7B",
          700: "#3B4C5B",
          800: "#1A2C3A",
          900: "#041524",
        },
        success: {
          100: "#D5F4ED",
          200: "#ACE9DB",
          300: "#82DEC8",
          400: "#59D3B6",
          500: "#2FC8A4",
        },
        warning: {
          100: "#FFE6CE",
          200: "#FFCC9E",
          300: "#FFB36D",
          400: "#FF993D",
          500: "#FF800C",
        },
        danger: {
          50: "#FEF3F5",
          100: "#FCD8DC",
          200: "#F78997",
          300: "#F78997",
          400: "#F46174",
          500: "#F46174",
        },
      },
    },
  },
  plugins: [],
};
