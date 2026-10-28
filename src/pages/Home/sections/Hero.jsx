import heroImg from "../../../../public/Headphone-Image.png";

const Hero = () => {
  return (
    <div className="relative h-220 flex flex-col justify-center items-center">
      <p className="z-10 text-6xl md:text-[180px] text-primary font-semibold leading-43">
        Resonance
      </p>
      <img src={heroImg} alt="" className="md:absolute top-0" />
      <p className="text-6xl md:text-[180px] bg-linear-to-t from-[#DACCBC] to-[#AFA497] bg-clip-text text-transparent font-semibold leading-43">
        Aura Pro II
      </p>
    </div>
  );
};

export default Hero;
