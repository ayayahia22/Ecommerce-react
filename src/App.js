import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Productlist from "./components/Productlist";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Productdetails from "./components/Productdetails";
import Product from "./components/product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider /> 
              <Productlist />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<Productdetails />} />
      </Routes>
    </div>
  );
}

export default App;
