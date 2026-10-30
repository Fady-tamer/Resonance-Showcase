import heroImg from "../../../../public/Headphone-Image.png";

const Hero = () => {
  return (
    <div className="relative max-w-7xl h-112.5 pt-20 lg:h-211 lg:pb-47.5 mx-auto flex flex-col justify-center items-center">
      <p className="z-10 text-6xl lg:text-[180px] text-primary font-semibold lg:leading-43">
        Resonance
      </p>
      <p className="text-5xl lg:text-[180px] bg-linear-to-t from-[#DACCBC] to-[#AFA497] bg-clip-text text-transparent font-semibold lg:leading-43">
        Aura Pro II
      </p>
      <img src={heroImg} alt="Aura pro 2" className="lg:absolute -top-80" />
    </div>
  );
};

export default Hero;
