import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import MobileLogo from "/icons/mobile-logo-omc.png";
import TabletLogo from "/icons/tablet-logo-omc.png";
import { useUserStore } from "../store/useUserStore";

export const Header = () => {
  const { isLoggedIn, username, toggleMenu, showMenu } = useUserStore();

  return (
    <>
      {/* Mobile header layout */}
      <header className="px-4 py-4 sticky top-0 z-50 md:hidden bg-secondary">
        <div className="flex justify-between ">
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
              <img
                src={MobileLogo}
                alt="OMC Book Club"
                className="md:hidden"
                onClick={toggleMenu}
              />
            </Link>
          </div>
          <div>
            <Navbar toggleMenu={toggleMenu} showMenu={showMenu} />
          </div>
        </div>
        {isLoggedIn ? (
          <div className="flex justify-center mt-3 md:hidden">
            <p className="font-worksans text-fifth">
              Happy reading, {username}!
            </p>
          </div>
        ) : (
          ""
        )}
      </header>
      {/* Tablet and desktop header layout */}
      <header className="hidden md:sticky md:top-0 md:z-50 md:bg-secondary md:flex flex-col px-8 py-5 lg:px-32 xl:px-56">
        <div className="flex justify-between">
          <Link to="/" className="cursor-pointer">
            <img
              src={TabletLogo}
              alt="OMC Book Club"
              className="hidden md:flex"
            />
          </Link>
          {isLoggedIn ? (
            <div className="justify-center my-3 hidden md:flex">
              <p className="font-worksans text-fifth text-lg">
                Happy reading, {username}!
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-8">
          <Navbar />
        </div>
      </header>
    </>
  );
};
