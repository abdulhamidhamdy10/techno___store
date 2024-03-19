import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Footer() {
  return (
    <div className='footer'>
      {/* <Container fluid className='addfooter'>
        <Row className='pt-5'>
          <Col md="6">
            <h4>Get connected with us on social networks:</h4>
          </Col>
          <Col md="6">
            <div className='icons'>
            <i class="fa-brands fa-facebook"></i> 
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-github"></i>
            </div>
          </Col>
        </Row>
      </Container > */}
      {/* <hr></hr> */}

      <Container className='contentfooter pt-5'>
        <Row>
          <Col md="2" className='mb-5'>
            <h6 >TECHNO STORE</h6>
            <p> Angular</p>
            <p>React</p>
            <p>Vue</p>
            <p>Laravel</p>
            <p>Laravel</p>
            <p>Laravel</p>

          </Col>
          <Col md="2" className='mb-5'>
            <h6 >PRODUCTS</h6>
            <p> Angular</p>
            <p>React</p>
            <p>Vue</p>
            <p>Laravel</p>
            <p>Laravel</p>
            <p>Laravel</p>
            <p>Laravel</p>
          </Col>
          <Col md="2" className='mb-5'>
            <h6 >USEFUL LINKS</h6>
            <p> Pricing</p>
            <p>Settings</p>
            <p>Orders</p>
            <p>Help</p>
            <p>Help</p>
          </Col>
          <Col md="2" className='mb-5'>
            <h6 >CONTACT</h6>
            <p><i class="fa-solid fa-house" style={{ color: "#ffffff" }}></i> New York, NY 10012, US</p>
            <p><i class="fa-solid fa-envelope" style={{ color: "#ffffff" }}></i> info@example.com</p>
            <p><i class="fa-solid fa-phone " style={{ color: "#ffffff" }}></i>  + 01 234 567 88</p>
            <p><i class="fa-solid fa-print " style={{ color: "#ffffff" }}></i>  + 01 234 567 89</p>
            <p><i class="fa-solid fa-print " style={{ color: "#ffffff" }}></i>  + 01 234 567 89</p>
          </Col>
          <Col md="4" className='mb-5'>
            <div className='icons'>
              <i class="fa-brands fa-facebook" style={{ marginRight: "10px"}}></i>
              <i class="fa-brands fa-twitter" style={{ marginRight: "10px"}}></i>
              <i class="fa-brands fa-google" style={{ marginRight: "10px"}}></i>
              <i class="fa-brands fa-instagram" style={{ marginRight: "10px"}}></i>
              <i class="fa-brands fa-linkedin" style={{ marginRight: "10px"}}></i>
              <i class="fa-brands fa-github" style={{ marginRight: "10px"}}></i>
            </div>
          </Col>
        </Row>

        <Row className='endfooter '>
          <Col md="1">
            
          </Col>
          <Col md="1">
            
          </Col>
          <Col md="1">
           
          </Col>
          <Col md="1">
            
          </Col>
          <Col md="1">
           
          </Col>
          <Col md="1">
            <p>Guids</p>
          </Col>
          <Col md="1">
            <p>Term of sales</p>
          </Col>
          <Col md="1">
            <p>Term of Use</p>
          </Col>
          <Col md="2">
            <p>Nikie privacy polices</p>
          </Col>
          <Col md="2">
            <p>your privacy choices</p>
          </Col>
        </Row>

        <Row>
          <Col md="12">
          <div class=" p-4 fw-bold" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          <i class="fa-solid fa-location-dot" style={{color: "#ffffff" , marginRight: "10px"}}></i>
        © 2024 Copyright:
        TECHNO STORE.com
      </div>
          </Col>
        </Row>
      </Container>

{/* 88888888888888888888888888888888888888888888888888888888 */}
{/* 88888888888888888888888888888888888888888888888888888888 */}
{/* 88888888888888888888888888888888888888888888888888888888 */}

     

    </div>
  )
}
export default Footer;