import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8DACB1", // footer
        secondary: "#F5F5F5", // background
        tertiary: "#D33F2A", // buttons
        fourth: "#D3E0E3", //wishlist input background
        fifth: "#375D51", //Logo, navlinks, hamburger icon
        sixth: "#A63221", //error messages
        seventh: "#961C0A", //button bg on hover
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
