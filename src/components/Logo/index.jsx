import { Link } from "react-router";

// icons
import { PiWaveformBold } from "react-icons/pi";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="w-fit flex items-center gap-1.5 text-primary font-semibold"
    >
      <PiWaveformBold className="text-[19.6px]" />
      <p className="text-[19.6px]">Resonance</p>
    </Link>
  );
};

export default Logo;
