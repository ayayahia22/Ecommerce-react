import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Productlist from "./components/Productlist";
import {  Routes, Route } from "react-router-dom";
import About from "./components/About";
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/*" element={<About />} />
      
    </Routes>

      <Slider />
      <Productlist />
      <About/>
     
    </div>
  );
}

export default App;
