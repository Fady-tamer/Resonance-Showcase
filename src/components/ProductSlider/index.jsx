import { useState } from "react";

const ProductSlider = ({ products, children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row md:items-center lg:flex-col">
      {/* Product */}
      <div className="relative mx-auto flex items-center justify-center overflow-hidden">
        <div
          className="flex transition-transform duration-800 ease-out"
          style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
        >
          {products.map((item) => (
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
        <div className="md:m-25 lg:m-0 p-2 flex md:flex-col lg:flex-row items-center gap-4 lg:gap-10">
          {products.map((color, index) => {
            const isSelected = selectedIndex === index;
            return (
              <button
                key={color.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Select ${color.name} color`}
                className={`w-5 h-5 lg:w-9 lg:h-9 rounded-full transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "ring-2 ring-primary ring-offset-2 scale-110 shadow-sm"
                    : "hover:scale-105 opacity-80 hover:opacity-100"
                }`}
                style={{ backgroundColor: color.bg }}
              />
            );
          })}
        </div>

        {children}
      </div>
    </div>
  );
};

export default ProductSlider;
