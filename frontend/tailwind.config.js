import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFFCF5", // main background
        jeans: "#093D5D", // footer and text
        heroSand: "#F4F0EC", // hero section background
        warmOrange: "#EEAD59", // our orange
        plum: "#683651",
        primary: "#8DACB1", // footer, nav-links
        secondary: "#F5F5F5", // background
        tertiary: "#D33F2A", // buttons
      },
    },
    fontFamily: {
      josefinsans: ["Josefin Sans", "sans-serif"], // Headers, Buttons
      worksans: ["Work Sans", "sans-serif"], // Text
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("current", "&.active");
    }),
  ],
};
