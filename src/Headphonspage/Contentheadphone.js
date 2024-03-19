import React from 'react'
import { Container, Row, Col } from 'reactstrap';

 function Contentheadphone() {
  return (
    <div className='headphone2'>
        <Container className='contentheadphone'>
            <Row className='rowone'>
                <Col md="3" className='colone'>
                    <h4>The canopy spanning the headband is made from a breathable knit mesh, distributing weight to reduce on‑head pressure.</h4>
                    <h4>The stainless steel frame is wrapped with a soft-to-the-touch material for a remarkable combination of strength, flexibility, and comfort.</h4>
                </Col>
                <Col md="6" className='coltwo'>
                    <img src="/images/89-895198_custom-drivers-for-a-superior-sound-headphones.png.png"></img>
                </Col>
                <Col md="3" className='colthree'>
                    <h4>Telescoping arms smoothly extend and stay where you set them, for a consistent fit and seal.</h4>
                </Col>
            </Row>

            <Row className='rowtwo'>
                <Col md="12" className='colone'>
                    <h3>Audio quality</h3>
                    <h1>Sounds like an<br></br> epiphany.</h1>
                </Col>
                <Col md="6" className='coltwo'>

                </Col>
                <Col md="6" className='colthree'>
                    <h3>AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience. Each part of their custom-built driver works to produce sound with ultra-low distortion across the audible range. From deep, rich bass to accurate mids and crisp, clean highs, you’ll hear every note with a new sense of clarity.</h3>
                </Col>
                <Col md="6" className='colfour'>
                    <img src="/images/b3ebcbf88d139990b9bd54b8f0bff594.png"></img>
                </Col>
                <Col md="6" className='colfive'>
                {/* <h3><b>Immersive listening </b><br></br>To cancel unwanted external sound, AirPods Max use a total of six outward-facing microphones to detect noise in your environment, and two inward-facing microphones to measure what you’re hearing. Beamforming microphones help isolate your voice on phone calls, so it’s heard clearly — even in windy situations.</h3> */}
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Contentheadphone;