import heroImg from "../../../../public/Headphone-Image.png";

const Hero = () => {
  return (
    <div className="relative h-132 pt-42.5 lg:h-234 lg:pt-80 lg:pb-80 flex flex-col justify-center items-center">
      <p className="z-10 text-6xl lg:text-[180px] text-primary font-semibold lg:leading-43">
        Resonance
      </p>
      <p className="text-5xl lg:text-[180px] bg-linear-to-t from-[#DACCBC] to-[#AFA497] bg-clip-text text-transparent font-semibold lg:leading-43">
        Aura Pro II
      </p>
      <img src={heroImg} alt="Aura pro 2" className="lg:absolute top-10" />
    </div>
  );
};

export default Hero;
