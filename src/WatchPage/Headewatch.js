import React from 'react'
import { Container,Row,Col } from 'reactstrap';

 function Headewatch() {
  return (
    <div className='watch'>
        <Container fluid className='headwatch'>
            <Row>
                <div className='mt-5'></div>
                <Col col="12 ">
                    <h1>Apple Watch6</h1>
                    <h6>Upgrade and save. Get up to $250 instant trade-in credit</h6>
                    <button>Buy Now</button><br></br>
                    <img data-wow-delay="0.2s" className='span3 wow bounceInLeft' src="/images/Apple-Watch-4.webp"></img>
                </Col>
            </Row>

            <Row className='hand '>
                <Col col="12">
                    <b>Unlock a healthier you.</b>
                    <h6>Own your days and your nights with Advanced Sleep Coaching,1 personalized<br></br> heart rate zones2 and advanced wellness insights on our biggest screen yet.3</h6>
                    <h6>Apple Watch6.<b>Start your everyday wellness journey.</b> </h6>
                    <h1>Our largest <br></br>Watch screen yet</h1>

                </Col>
            </Row>
        </Container>
        <img src="/images/kinetic-tap-tap_fallback__lufv77h9z3ey_large.png"></img>

    </div>
  )
}
export default Headewatch;