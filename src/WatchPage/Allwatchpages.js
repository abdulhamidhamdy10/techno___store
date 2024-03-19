import React from 'react';
import Navbar from '../HomePage/Navbar';
import Headewatch from './Headewatch';
import Sectionwatch from './Sectionwatch';
import Cotentwatch from './Cotentwatch';
import Footer from '../HomePage/Footer';
import ScrollToTop from "react-scroll-to-top";


 function Allwatchpages() {
  return (
    <div>
        <Navbar/>
        <Headewatch/>
        <Sectionwatch/>
        <Cotentwatch/>
        <Footer/>
        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "#E23E57"}}
        />
    </div>
  )
}
export default Allwatchpages;