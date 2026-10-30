import { FaMeta, FaXTwitter } from "react-icons/fa6";
import Button from "../Button";
import Logo from "../Logo";
import { RiDiscordLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-10.5 pb-4 lg:pt-20 lg:px-0 flex flex-col items-center gap-10.5">
      <div className="px-6 flex flex-col gap-8">
        <p className="text-[42px] text-primary text-center font-semibold">
          Sound. Presence. Purpose.
        </p>
        <p className="text-center text-[18px] text-secondary">
          Focused on crafting immersive audio experiences. We believe sound
          should not just be heard—it should move you.
        </p>
        <div className="flex justify-center gap-4">
          <Button text={"Aura Pro II"} />
          <Button text={"Flow II"} />
        </div>
      </div>

      <div className="w-full px-6 py-4 flex flex-col lg:flex-row lg:justify-between border-t border-secondary">
        <div className="hidden lg:block">
          <Logo />
        </div>
        <div className="flex items-center flex-col lg:flex-row gap-4">
          <p className="text-center text-[16px] text-primary">
            © 2026 Resonance. All rights reserved.
          </p>
          <div className="flex gap-4">
            <RiDiscordLine size={20} />
            <FaXTwitter size={20} />
            <FaMeta size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
