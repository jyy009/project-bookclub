import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import MobileLogo from "/icons/OMC.png";

export const Header = () => {
  const userName = localStorage.getItem("username");

  return (
    <header className="bg-cream px-2 py-3 sticky top-0">
      <div className="flex justify-between items-center">
        <Link to="/" className="cursor-pointer">
          <img src={MobileLogo} alt="OMC Book Club" />
        </Link>
        <Navbar />
      </div>
      <div className="flex justify-center my-3">
        <p className="font-worksans">Welcome {userName}, happy reading!</p>
      </div>
    </header>
  );
};
