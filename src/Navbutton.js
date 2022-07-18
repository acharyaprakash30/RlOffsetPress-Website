import React from 'react'
import { FaAngleUp } from 'react-icons/fa'
import './Navbutton.css'
import { useState, useEffect } from 'react'

const Navbutton = () => {
    const[barscroll,setBarscroll] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
           if (window.scrollY > 150) {
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
        <a href='#top'><FaAngleUp className={barscroll ? 'navbutton' : 'navbarbutton-off'} size={35}/></a>
    </>
  )
}

export default Navbutton