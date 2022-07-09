import React from "react";
import BelowCarousel from "./BelowCarousel";
import ImageCarousel from "./ImageCarousel";
import Navbar from "./Navbar";
import Services from "./Services";

function App() {
  return (
    <div>
      <Navbar/>
      <ImageCarousel/>
      <BelowCarousel/>
      <Services/>
    </div>
  );
}

export default App;
