import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";

import Navbar from "./Navbar";

function Header() {
  return (
    <header className="mt-15 large-container flex justify-between items-center font-space-grotesk">
      <Link to="/">
        <img src="logo-black.png" alt="" className="w-55" />
      </Link>

      <div className="hidden lg:flex items-center gap-10">
        <Navbar fontSize={20} color="#000000" />

        <button className="text-[20px] border border-black rounded-[14px] py-[20px] px-[35px]">
          Request a quote
        </button>
      </div>

      <GiHamburgerMenu className="block lg:hidden" />
    </header>
  );
}

export default Header;
