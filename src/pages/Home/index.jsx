// sections
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Product from "./sections/Product";
import ProductDetails from "./sections/ProductDetails";

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Features />
      <ProductDetails />
    </div>
  );
};

export default Home;
