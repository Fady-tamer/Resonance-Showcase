import { useEffect, useState } from "react";

import slides from "../../../utils/slides";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className="max-w-7xl mx-auto p-6 lg:p-20 rounded-2xl overflow-hidden">
      <div
        className={`flex gap-4 transition-transform duration-500 ease-in-out`}
        style={{
          transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 1}rem))`,
        }}
      >
        {slides.map((slide) => {
          return (
            <div
              key={slide.id}
              className="w-full flex flex-col lg:flex-row items-center lg:gap-4 shrink-0 rounded-2xl bg-linear-180 from-[#D2CDC6] to-[#F8BF93]"
            >
              <p className="px-8 py-10.5 lg:px-10.2 text-2xl lg:text-[32px] font-medium leading-8 lg:leading-10.5">
                {slide.text}
              </p>
              <img src={slide.img} alt="Headphone preview" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
