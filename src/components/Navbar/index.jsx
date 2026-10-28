// components
import Logo from "../Logo";
import MobileNav from "./components/MobileNav";
import TALNav from "./components/TALNav";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full max-w-7xl p-6 flex justify-between items-center">
      <Logo />

      {/* mobile */}
      <MobileNav />

      {/* tablet & laptop */}
      <TALNav />
    </div>
  );
};

export default Navbar;
