import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function Headheadphones() {
    return (
        <div className='headphone1'>
            <Container className='headheadphone'>
                <Row className='rowone'>
                    <Col md="6" className='colone'>
                        {/* <img src="/images/headphone/headphones/images-10.png"></img> */}
                        <img src="/images/S1_Image.png"></img>
                    </Col>
                    <Col md="6" className='coltwo'>
                        {/* <img src="/images/headphone/headphones/images-10.png"></img> */}
                        <h1>Which AirPods are<br></br>
                            right for you?</h1>
                            <h5>Personalized Spatial Audio with dynamic head tracking places sounds all around you to create a three-dimensional listening experience for music, TV shows, movies, and more — immersing you in sounds from every direction so it feels like you’re in your very own concert hall or theater.1</h5>
                    </Col>
                </Row>

                <Row className='rowtwo'>
                    <Col md="6" >
                        <div className='colone'>
                        <img  src='/images/Airpods-PNG-Pic.png'></img>

                        </div>
                    </Col>
                    <Col md="6" >
                        <div className='coltwo'>
                        <h1>Bass hits an<br></br> all-time high.</h1>
                        <h5>An Apple-designed dynamic driver, powered by a custom amplifier, renders music in exceptionally detailed sound quality — so you revel in every tone, from deep, rich bass to crisp, clean highs.</h5>
                        </div>
                        
                    </Col>
                </Row>

                <Row className='rowthree'>
                    <Col className='colone'>
                        <img src="/images/Proper-Web-images-2021-Airpods_dd2e28a3-0753-4e0f-bae7-b3133e59e414_1024x.png"></img>
                    </Col>
                    <Col className='coltwo'>
                        <h1>An instant<br></br> connection.</h1>
                        <h5>Place AirPods near your iPhone or iPad and tap Connect to pair with every device in your iCloud account. If you’re playing music on your Mac, you’ll be able to answer a call on your iPhone — without having to switch devices.4</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Headheadphones;