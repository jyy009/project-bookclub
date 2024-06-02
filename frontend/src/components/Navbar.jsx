import { NavLink } from "react-router-dom";

export const Navbar = () => {
const menu = document.querySelector(".menu")

  const toggleMenu = () => {
    if (menu)
  }

  return (
    <div>
      <nav className="fixed transition duration-200 inset-y-0 inset-x-0 z-99 bg-jeans text-cream list-none pt-16 hidden menu">
        <NavLink to="/about-us">About us</NavLink>
        <NavLink to="/book-club">The Book Club</NavLink>
        <NavLink to="/sign-up">Sign up</NavLink>
      </nav>
      <button className="">
        <i className="menuIcon material-icons">menu</i>
        <i className="closeIcon material-icons hidden">close</i>
      </button>
    </div>
  );
};
