import { useEffect, useState } from "react";
import { NavLink } from "react-router";

// icons
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const MobileNav = () => {
  const [toggleNavigators, setToggleNavigators] = useState(false);

  useEffect(() => {
    if (toggleNavigators) {
      const timer = setTimeout(() => {
        setToggleNavigators(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [toggleNavigators]);

  return (
    <div className="md:hidden flex">
      <button onClick={() => setToggleNavigators(!toggleNavigators)}>
        {toggleNavigators ? (
          <IoClose size={20} className="text-primary" />
        ) : (
          <FaBars size={18} className="text-primary" />
        )}
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-17 right-6 p-4 flex flex-col rounded-2xl bg-white shadow-lg transition-all duration-300 ease-in-out ${
          toggleNavigators
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setToggleNavigators(false)}
          className="px-8 py-2.5 rounded-3xl text-center"
        >
          Home
        </NavLink>
        <NavLink
          to="/TechSpecs"
          onClick={() => setToggleNavigators(false)}
          className="px-8 py-2.5 rounded-3xl text-center"
        >
          Tech Specs
        </NavLink>
        <NavLink
          to="/Compare"
          onClick={() => setToggleNavigators(false)}
          className="px-8 py-2.5 rounded-3xl text-center"
        >
          Compare
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
