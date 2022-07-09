import React from "react";
import BelowCarousel from "./BelowCarousel";
import ImageCarousel from "./ImageCarousel";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <ImageCarousel/>
      <BelowCarousel/>
    </div>
  );
}

export default App;
