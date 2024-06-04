import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

export const Navbar = () => {
  const { isLoggedIn } = useUserStore();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="sm:hidden ">
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

          {isLoggedIn ? (
            <>
              <NavLink
                to="/wishlist"
                className={"cursor-pointer [&.active]:underline underline-offset-4"}
                onClick={toggleMenu}>
                Wishlist
              </NavLink>
              <NavLink
                to="/sign-out"
                className={"cursor-pointer [&.active]:underline underline-offset-4"}
                onClick={toggleMenu}>
                Sign out
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/sign-up"
                className={"cursor-pointer [&.active]:underline underline-offset-4"}
                onClick={toggleMenu}>
                Sign up
              </NavLink>
              <NavLink
                to="/sign-in"
                className={"cursor-pointer [&.active]:underline underline-offset-4"}
                onClick={toggleMenu}>
                Sign in
              </NavLink>
            </>
          )}
        </nav>
        <button onClick={toggleMenu} className="flex cursor-pointer">
          <i className={showMenu ? "hidden" : "menuIcon material-icons text-4xl text-jeans"}>menu</i>
          <i className={showMenu ? "closeIcon material-icons text-4xl text-jeans" : "hidden"}>close</i>
        </button>
      </div>
      <nav className="hidden sm:flex justify-around text-jeans font-josefinsans text-xl">
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

        {isLoggedIn ? (
          <>
            <NavLink
              to="/wishlist"
              className={"cursor-pointer [&.active]:underline underline-offset-4"}
              onClick={toggleMenu}>
              Wishlist
            </NavLink>
            <NavLink
              to="/sign-out"
              className={"cursor-pointer [&.active]:underline underline-offset-4"}
              onClick={toggleMenu}>
              Sign out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/sign-up"
              className={"cursor-pointer [&.active]:underline underline-offset-4"}
              onClick={toggleMenu}>
              Sign up
            </NavLink>
            <NavLink
              to="/sign-in"
              className={"cursor-pointer [&.active]:underline underline-offset-4"}
              onClick={toggleMenu}>
              Sign in
            </NavLink>
          </>
        )}
      </nav>
    </>
  );
};
