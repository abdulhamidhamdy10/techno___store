import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../HomePage/Navbar';
import Login from './Login';
import Footer from '../HomePage/Footer';

function Alluserprofile() {
  return (
    <div>
        <Navbar/>
        <Login/>
        <Footer/>

    </div>
  )
}
export default Alluserprofile;