import React from 'react'
import Navbar from '../HomePage/Navbar';
import Headheadphones from './Headheadphones';
import Contentheadphone from './Contentheadphone';
import Mainheadphone from './Mainheadphone';
import Footer from '../HomePage/Footer';
import ScrollToTop from "react-scroll-to-top";

 function Allheadphone() {
  return (
    <div style={{backgroundColor:"#ECF0F1"}}>
        <Navbar/>
        <div className='mt-5 pt-5'></div>
        <Headheadphones/>
        <Contentheadphone/>
        <Mainheadphone/>
        <Footer/>
        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "#E23E57"}}
        />
    </div>
  )
}

export default Allheadphone;