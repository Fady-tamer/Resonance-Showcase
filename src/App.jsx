import { BrowserRouter, Route, Routes } from "react-router";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Home from "./pages/Home";
import TechSpecs from "./pages/TechSpecs";
import Compare from "./pages/Compare";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="" element={<TechSpecs />} />
          <Route path="" element={<Compare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
