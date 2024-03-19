import React from 'react'
import { Container,Row,Col } from 'reactstrap';

 function Sectionwatch() {
  return (
    <div className='watch2'>
        <Container className='sectionwatch'>
          <Row>
            <Col md="6">
              <h2>Stunning and tough</h2>
              <h6>Feel confident wearing your Galaxy Watch6 just about anywhere — durable crystal glass keeps your screen 
                looking great while protecting it from bumps and scratches. Meticulously crafted with an IP68 rating, Watch6 
                also resists water and dust.9</h6>

              <h3><i class="fa-solid fa-droplet"></i>    Water-resistant</h3>
              <h3> <i class="fa-solid fa-wind"></i>  Dust-resistant</h3>
            </Col>

            <Col md="6">
            <img src="/images/Apple-Watch-Transparent.png">
            </img>
            </Col>

          </Row>

          <Row className='processor'>
            <Col md="6">
            <h2>Last Up To 40 Hours </h2>
            <img className='img1' src="/images/Screen-Shot-2015-04-16-at-1.54.30-PM.png"></img>
            </Col>
            <Col md="6">
              <h2>18% Faster Processor </h2>
            <img className='img2' src="/images/watchos-9-series-7-settings-battery.png"></img>
            </Col>

          </Row>

        </Container>
    </div>
  )
}
export default Sectionwatch;