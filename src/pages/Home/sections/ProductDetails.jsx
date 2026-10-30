import { useEffect, useState } from "react";

// images
import productDetailsImgs from "../../../utils/productDetails";

const ProductDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productDetailsImgs.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-20 pb-40 flex flex-col gap-20 overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-primary text-[42px] lg:text-[56px] font-semibold">
          Every Detail matters
        </p>
        <p className="text-center text-[18px] lg:text-2xl text-secondary">
          From the stitch to the signal, precision lives here.
        </p>
      </div>

      <div
        className="flex gap-4 transition-transform duration-500 -translate-x-(--slide-offset) lg:translate-x-0"
        style={{
          "--slide-offset": `calc(${activeIndex * 100}% + ${activeIndex * 1}rem)`,
        }}
      >
        {productDetailsImgs.map((img, index) => {
          return (
            <div
              key={index}
              className="w-full flex justify-center shrink-0 lg:shrink rounded-[26px] overflow-hidden"
            >
              <img src={img} alt={`Product detail ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
