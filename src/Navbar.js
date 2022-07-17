import React from 'react'
import './Navbar.css'
import { useEffect, useState } from 'react'
import { 
  Link,
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import About from "./Navlinks/About";
import Blogs from "./Navlinks/Blogs";
import Contacts from "./Navlinks/Contacts";
import Home from './Navlinks/Home';


const Navbar = () => {
  // const[featurelist, setFeatureList] = useState(false);
  const[servicelist, setServiceList] = useState(false);
  const[barscroll,setBarscroll] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
       if (window.scrollY > 0) {
        setBarscroll(true);
       } 
        else setBarscroll(false);
    });
    return()=>{
        window.removeEventListener("scroll",setBarscroll);
    };
},[]);

  return (
    <>
    <Router>
    <div className={`navbar ${barscroll ? 'navbar-color' : ''}`}>
      <div className='navbar-logo'>
        <Link to="/"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWVDSyMt7RiebfV25ExNLg_EUlRn3hHjsBNQ&usqp=CAU' alt=''/></Link>
      </div>
      <ul className='navbar-links'>
      <Link to='/'><li className='navbar-li'>Home</li></Link>
      {/* <li className='navbar-li pr-1' onClick={()=>setFeatureList(!featurelist)}>Features<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg></li>
        <ul className={featurelist?'navbar-sub-feature':'navbar-sub'}>
          <li className='navbar-sub-li'>feature 1</li>
          <li className='navbar-sub-li'>feature 2</li>
        </ul> */}
        <Link to='/about'><li className='navbar-li'>About</li></Link>
        <li className='navbar-li pr-1'  onClick={()=>setServiceList(!servicelist)}>Services<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg></li>
        <ul className={servicelist?'navbar-sub-service':'navbar-sub'}>
          <li className='navbar-sub-li'>Service 1</li>
          <li className='navbar-sub-li'>Service 2</li>
          <li className='navbar-sub-li'>Service 3</li>
          <li className='navbar-sub-li'>Service 4</li>
        </ul>
        <Link to='/blogs'><li className='navbar-li'>Blogs</li></Link>
        <Link to='/contacts'><li className='navbar-li'>Contacts</li></Link>
      </ul>
      <ul className='navbar-address'>
        <li className='navbar-add-mail'><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 mr-1 color-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>rloffsetpress@gmail.com</li>
        <li className='navbar-add'><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 mr-1 color-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>071-123456</li>
      </ul>
    </div>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default Navbar