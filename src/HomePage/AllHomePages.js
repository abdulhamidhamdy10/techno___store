import React from 'react';
import Navbar from './Navbar';
import Headhome from './Headhome';
import Sectionhome from './Sectionhome';
import Footer from './Footer';
import ScrollToTop from "react-scroll-to-top";
import Bodyhome from './Bodyhome';


 function AllHomePages() {
  return (
    <div>
        <Navbar/>
        <div className='mt-5 mb-5'></div>
        <div className='mt-5 mb-5'></div>
        <div className='mt-5 mb-5'></div>
        <Headhome/>
        <div className='mt-5 '></div>
        <div className='mt-5 '></div>
        <div className='mt-5 '></div>

        <Bodyhome/>
        {/* <Sectionhome/> */}
        <Footer/>
        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "#E23E57"}}
        />
    </div>
  )
}
export default AllHomePages;