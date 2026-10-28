// components
import Logo from "../Logo";
import MobileNav from "./components/MobileNav";
import TALNav from "./components/TALNav";

const Navbar = () => {
  return (
    <div className="p-6 flex justify-between items-center">
      <Logo />

      {/* mobile */}
      <MobileNav />

      {/* tablet & laptop */}
      <TALNav/>
    </div>
  );
};

export default Navbar;
