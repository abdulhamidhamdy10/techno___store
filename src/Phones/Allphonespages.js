import React from 'react'
import Navbar from '../HomePage/Navbar';
import Headphone from './Headphone';
import Sectionphone from './Sectionphone';
import Contentphone from './Contentphone';
import Contentphonetwo from './Contentphonetwo';
import Mainphone from './Mainphone';
import Footer from '../HomePage/Footer';
import ScrollToTop from "react-scroll-to-top";
// import Product from './Productphone';

function Allphonespages() {
  return (
    <div>
        <Navbar/>
        <div className='mt-5 pt-4'></div>
        <Headphone/>
        <Sectionphone/>
        <Contentphone/>
        <Contentphonetwo/>
        <Mainphone/>
        {/* <Product/> */}
        <Footer/>
        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "#E23E57"}}
        />
    </div>
  )
}
export default  Allphonespages;