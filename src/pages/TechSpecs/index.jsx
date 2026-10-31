import product from "../../utils/products";
import specs from "../../utils/specs";

// components
import ProductSlider from "../../components/ProductSlider";

const TechSpecs = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <ProductSlider products={product} />
      {specs.map((spec) => {
        return (
          <div className="px-6 py-10.5 lg:px-30 lg:py-20 flex flex-col lg:flex-row gap-6 lg:gap-10.5 border-t border-gray-200">
            <p className="lg:min-w-75 text-[32px] text-primary font-semibold">
              {spec.title}
            </p>
            <p className="text-[18px] text-secondary">{spec.spec}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TechSpecs;
