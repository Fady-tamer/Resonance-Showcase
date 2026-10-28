import { NavLink } from "react-router";

const TALNav = () => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <NavLink to={"/"} className="px-8 py-2.5 rounded-3xl text-center">
        Home
      </NavLink>
      <NavLink
        to={"/TechSpecs"}
        className="px-8 py-2.5 rounded-3xl text-center"
      >
        Tech Specs
      </NavLink>
      <NavLink to={"/Compare"} className="px-8 py-2.5 rounded-3xl text-center">
        Compare
      </NavLink>
    </div>
  );
};

export default TALNav;
