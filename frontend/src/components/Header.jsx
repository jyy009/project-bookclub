import { Navbar } from "./Navbar";
import MobileLogo from "/icons/OMC-MobileLogo2.png";

export const Header = () => {
  return (
    <header>
      <div>
        <img src={MobileLogo} alt="OMC Book Club" />
        <Navbar />
      </div>
    </header>
  );
};
