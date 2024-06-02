import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import MobileLogo from "/icons/OMC.png";
import TabletLogo from "/icons/OMC-MobileLogo2.png";

export const Header = ({ username, isLoggedIn }) => {
  return (
    <>
      <header className="bg-cream px-2 py-3 sticky top-0 sm:flex sm:hidden">
        <div className="flex justify-between sm:flex-col">
          <div className="flex items-center sm:items-start">
            <Link to="/" className="cursor-pointer">
              <img src={MobileLogo} alt="OMC Book Club" className="sm:hidden" />
            </Link>
          </div>
          <div>
            <Navbar isLoggedIn={isLoggedIn} />
          </div>
        </div>
        {isLoggedIn ? (
          <div className="flex justify-center mt-3 mb-1 sm:hidden">
            <p className="font-worksans text-jeans">Welcome {username}, happy reading!</p>
          </div>
        ) : (
          ""
        )}
      </header>
      <header className="hidden sm:flex flex-col mt-5 mb-2 mx-5">
        <div className="flex justify-between">
          <Link to="/" className="cursor-pointer">
            <img src={TabletLogo} alt="OMC Book Club" className="hidden sm:flex" />
          </Link>
          {isLoggedIn ? (
            <div className="flex justify-center my-3 sm:flex">
              <p className="font-worksans text-jeans">Welcome {username}, happy reading!</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-6">
          <Navbar isLoggedIn={isLoggedIn} />
        </div>
      </header>
    </>
  );
};
