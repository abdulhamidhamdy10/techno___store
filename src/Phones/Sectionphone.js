import React from 'react'
import { Container,Row,Col } from 'reactstrap';

function Sectionphone() {
  return (
    <div className='phone2'>
        <Container  className='sectionphone'>
          <Row className='row1'>
            <Col md="12" className='col1'>
                <img src="/images/3198fc856619261e439a553d8b6dd83f.png"></img>
                <h1>Newphoria</h1>
            </Col>
          </Row>

          <Row className='row2'>
            <Col md="4">
                <div  className='col1'>
                <h2>Get $180–$620 in<br></br> credit when you trade<br></br> in iPhone 14 or higher.1</h2>
                <img src="/images/23092022151357_ip14promgold.png"></img>
                <h6>Includes trade‑in and carrier credits.<br></br> AT&T: up to $1000. T‑Mobile: up to $800.<br></br> Verizon: up to $830.</h6>
                </div>

            </Col>
            <Col md="4" >
                <div  className='col2'>
                <h6>CARRIER TRADE‑IN DEALS</h6>
                <h2>iPhone carrier deals.<br></br> Right here at Apple.<br></br> For as low as $0.9</h2>
                <img src="/images/iphone-x-in-hands-png-16.png"></img>
                </div>

            </Col>
            <Col md="4">
                <div  className='col3'>
                <h6>CARRIER TRADE‑IN DEALS</h6>
                <h2>iPhone carrier deals.<br></br> Right here at Apple.<br></br> For as low as $0.9</h2>
                <img src="/images/iphone_14_PNG37.png"></img>
                </div>

            </Col>
          </Row>

          <Row className='row3'>

            <Col md="6" className='col1'>
                <h1>iOS 17</h1>
                <h3>Snap on a magnetic case, wallet,<br></br> or both. And get fast, efficient<br></br> wireless charging.</h3>
            </Col>
            <Col md="6" className='col2'>
                <img src="/images/iPhone-13-Pro-PNG.png"></img>
            </Col>
          </Row>
        </Container>
    </div>
  )
}
export default Sectionphone;