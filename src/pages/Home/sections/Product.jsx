import { useState } from "react";

// product data
import ProductsData from "../../../utils/products";

// components
import ProductSlider from "../../../components/ProductSlider";

const Product = () => {
  return (
    <section className="max-w-7xl mx-auto my-11 lg:my-20 lg:mt-35 flex flex-col items-center gap-10">
      {/* Header */}
      <div className="text-center px-4">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] text-primary font-semibold tracking-tight">
          Your Style. Your Sound.
        </h2>
        <p className="mt-3 text-lg md:text-2xl text-secondary">
          Studio-grade acoustics that dissolve distractions and awaken clarity.
        </p>
      </div>

      <ProductSlider products={ProductsData}>
        <p className="md:hidden lg:block text-sm md:text-base text-secondary font-medium">
          Choose a color that fits your flow.
        </p>
      </ProductSlider>
    </section>
  );
};

export default Product;
