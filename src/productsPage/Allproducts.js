import React from 'react'
// import product from './product';
import Navbar from '../HomePage/Navbar';
import Product from './Product';
import Footer from '../HomePage/Footer';

 function Allproducts() {
  return (
    <div>
        <Navbar/>
        <div className='mt-5 pt-5'></div>
        <Product/>
        <Footer/>
    </div>
  )
}
export default Allproducts;