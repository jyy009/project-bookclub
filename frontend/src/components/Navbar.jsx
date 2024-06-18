import { NavLink } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const { isLoggedIn, signOut, toggleMenu, showMenu } = useUserStore();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileView && showMenu) {
      toggleMenu();
    }
  }, [isMobileView, showMenu]);

  return (
    <>
      <div className="md:hidden ">
        <nav
          className={
            showMenu
              ? "fixed translate-y-14 transition duration-200 inset-y-0 inset-x-0 z-99 bg-secondary text-fifth list-none pt-8 flex flex-col items-center gap-5 font-josefinsans text-xl"
              : "hidden"
          }
        >
          <NavLink
            to="/about-us"
            className={"cursor-pointer [&.active]:underline underline-offset-4"}
            onClick={toggleMenu}
          >
            About us
          </NavLink>
          <NavLink
            to="/book-club"
            className={"cursor-pointer [&.active]:underline underline-offset-4"}
            onClick={toggleMenu}
          >
            The Book Club
          </NavLink>

          {isLoggedIn ? (
            <>
              <NavLink
                to="/wishlist"
                className={
                  "cursor-pointer [&.active]:underline underline-offset-4"
                }
                onClick={toggleMenu}
              >
                Wishlist
              </NavLink>
              <NavLink
                to={"/my-profile"}
                className={
                  "cursor-pointer [&.active]:underline underline-offset-4"
                }
                onClick={toggleMenu}
              >
                My Profile
              </NavLink>
              <NavLink
                to="/"
                className={"cursor-pointer"}
                onClick={() => {
                  toggleMenu();
                  signOut();
                }}
              >
                Sign out
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/sign-up"
                className={
                  "cursor-pointer [&.active]:underline underline-offset-4"
                }
                onClick={toggleMenu}
              >
                Sign up
              </NavLink>
              <NavLink
                to="/sign-in"
                className={
                  "cursor-pointer [&.active]:underline underline-offset-4"
                }
                onClick={toggleMenu}
              >
                Sign in
              </NavLink>
            </>
          )}
        </nav>

        <button onClick={toggleMenu} className="flex cursor-pointer">
          <i
            className={
              showMenu
                ? "hidden"
                : "menuIcon material-icons text-4xl text-fifth"
            }
          >
            menu
          </i>
          <i
            className={
              showMenu
                ? "closeIcon material-icons text-4xl text-fifth"
                : "hidden"
            }
          >
            close
          </i>
        </button>
      </div>

      <nav className="hidden md:flex justify-between text-fifth font-josefinsans text-xl">
        <NavLink
          to="/about-us"
          className={"cursor-pointer [&.active]:underline underline-offset-4"}
          onClick={toggleMenu}
        >
          About us
        </NavLink>
        <NavLink
          to="/book-club"
          className={"cursor-pointer [&.active]:underline underline-offset-4"}
          onClick={toggleMenu}
        >
          The Book Club
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink
              to="/wishlist"
              className={
                "cursor-pointer [&.active]:underline underline-offset-4"
              }
              onClick={toggleMenu}
            >
              Wishlist
            </NavLink>
            <NavLink
              to={"/my-profile"}
              className={
                "cursor-pointer [&.active]:underline underline-offset-4"
              }
              onClick={toggleMenu}
            >
              My Profile
            </NavLink>
            <NavLink
              to="/"
              className={"cursor-pointer"}
              onClick={() => {
                toggleMenu();
                signOut();
              }}
            >
              Sign out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/sign-up"
              className={
                "cursor-pointer [&.active]:underline underline-offset-4"
              }
              onClick={toggleMenu}
            >
              Sign up
            </NavLink>
            <NavLink
              to="/sign-in"
              className={
                "cursor-pointer [&.active]:underline underline-offset-4"
              }
              onClick={toggleMenu}
            >
              Sign in
            </NavLink>
          </>
        )}
      </nav>
    </>
  );
};
