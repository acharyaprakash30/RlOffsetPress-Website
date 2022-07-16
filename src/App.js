import React from "react";
// import BelowCarousel from "./BelowCarousel";
// import ImageCarousel from "./ImageCarousel";
// import Services from "./Services";
import Navbar from "./Navbar";
import { 
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import Home from "./Navlinks/Home";
import Features from "./Navlinks/Features";
import About from "./Navlinks/About";
import Blogs from "./Navlinks/Blogs";
import Service from './Navlinks/Service';
import Contacts from "./Navlinks/Contacts";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/features' element={<Features/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
      </Router>   
      {/* <ImageCarousel/>
      <BelowCarousel/>
      <Services/> */}
  </>
  );
}

export default App;
