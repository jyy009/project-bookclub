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
        primary: "#8DACB1", // footer
        secondary: "#F5F5F5", // background
        tertiary: "#D33F2A", // buttons
        fourth: "#D3E0E3", //wishlist input background
        fifth: "#375D51", //Logo, navlinks, hamburger icon
        sixth: "#A63221", //error messages
      },
      height: {
        largeImg: "500px",
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
