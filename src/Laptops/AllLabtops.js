import React from 'react'
import HeadLabtops from './HeadLabtops';
import Navbar from '../HomePage/Navbar';
import Sectionlabtops from './Sectionlabtops';
import Footer from '../HomePage/Footer';
import Elementlabtops from './Elementlabtops';
import Product from '../productsPage/Product';
import ScrollToTop from "react-scroll-to-top";

 function AllLabtops() {
  return (
    <div>
        <Navbar/>
        <div className='mt-5 pt-4'></div>
        <HeadLabtops/>
        <Sectionlabtops/>
        <Elementlabtops/>
        <Product/>
       <Footer/>
       <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "#E23E57"}}
        />
    </div>
  )
}
export default AllLabtops;