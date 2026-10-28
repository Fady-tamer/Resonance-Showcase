import { useState } from "react";

// product data
import ProductsData from "../../../utils/products";

const Product = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-20 flex flex-col items-center gap-10 overflow-hidden select-none">
      {/* Header */}
      <div className="text-center px-4">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] text-primary font-semibold tracking-tight">
          Your Style. Your Sound.
        </h2>
        <p className="mt-3 text-lg md:text-2xl text-secondary">
          Studio-grade acoustics that dissolve distractions and awaken clarity.
        </p>
      </div>

      {/* Product */}
      <div className="relative mx-auto flex items-center justify-center">
        <div
          className="flex transition-transform duration-800 ease-out"
          style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
        >
          {ProductsData.map((item) => (
            <div
              key={item.id}
              className="w-full shrink-0 flex items-center justify-center"
            >
              <img src={item.image} alt={`${item.name} Headphones`} />
            </div>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-10 p-2">
          {ProductsData.map((color, index) => {
            const isSelected = selectedIndex === index;
            return (
              <button
                key={color.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Select ${color.name} color`}
                className={`w-9 h-9 rounded-full transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "ring-2 ring-primary ring-offset-2 scale-110 shadow-sm"
                    : "hover:scale-105 opacity-80 hover:opacity-100"
                }`}
                style={{ backgroundColor: color.bg }}
              />
            );
          })}
        </div>

        <p className="text-sm md:text-base text-secondary font-medium">
          Choose a color that fits your flow.
        </p>
      </div>
    </section>
  );
};

export default Product;
