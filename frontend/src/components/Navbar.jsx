import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav
        className={
          showMenu
            ? "fixed translate-y-14 transition duration-200 inset-y-0 inset-x-0 z-99 bg-cream text-jeans list-none pt-8 flex flex-col items-center gap-5 font-josefinsans text-lg"
            : "hidden"
        }>
        <NavLink
          to="/about-us"
          className={"cursor-pointer [&.active]:underline underline-offset-4"}
          onClick={toggleMenu}>
          About us
        </NavLink>
        <NavLink
          to="/book-club"
          className={"cursor-pointer [&.active]:underline underline-offset-4"}
          onClick={toggleMenu}>
          The Book Club
        </NavLink>
        <NavLink
          to="/sign-in"
          className={"cursor-pointer [&.active]:underline underline-offset-4"}
          onClick={toggleMenu}>
          Sign in
        </NavLink>
        <NavLink
          to="/sign-up"
          className={"cursor-pointer [&.active]:underline underline-offset-4"}
          onClick={toggleMenu}>
          Sign up
        </NavLink>
      </nav>
      <button onClick={toggleMenu} className="flex cursor-pointer">
        <i className={showMenu ? "hidden" : "menuIcon material-icons text-4xl text-jeans"}>menu</i>
        <i className={showMenu ? "closeIcon material-icons text-4xl text-jeans" : "hidden"}>close</i>
      </button>
    </div>
  );
};
