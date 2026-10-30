import bg from "../../../../public/price-bg.png";
import Button from "../../../components/Button";

const Price = () => {
  return (
    <div
      className="max-w-7xl min-h-201 lg:min-h-223.5 mx-auto pt-10.5 lg:pt-20 flex justify-center bg-cover bg-center bg-no-repeat lg:rounded-2xl"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center gap-6">
        <p className="text-center text-white text-6xl lg:text-[86px] font-semibold">
          Dreamlike Sound
        </p>
        <div className="flex flex-col items-center gap-6">
          <p className="text-white text-[24px]">
            Starting at $320 — Available Now.
          </p>
          <Button text={"Buy Now"}/>
        </div>
      </div>
    </div>
  );
};

export default Price;
