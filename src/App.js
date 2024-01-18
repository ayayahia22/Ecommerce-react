import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Productlist from "./components/Productlist";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

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
      </Routes>
    </div>
  );
}

export default App;
