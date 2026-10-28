import { Outlet } from "react-router";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-dvh bg-linear-canvas">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
