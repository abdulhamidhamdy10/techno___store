import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function Mainheadphone() {
    return (
        <div className='headphone3'>
            <Container fluid className='mainheadphone'>
                <Row className='rowone'>
                    <Col md="12" className='colone'>
                        <h1>More magic to play with.</h1>
                        <h5>With a powerful Apple‑designed H1 chip in each cup, our custom acoustic design,<br></br>
                            and advanced software, AirPods Max use computational audio to create a breakthrough listening<br></br>
                            experience. By tapping into each chip’s 10 audio cores, computational audio helps block outside<br></br>
                            noise, adapts audio to the fit and seal of your ear cushions, and makes movie scenes sound<br></br>
                            like they’re happening all around you.</h5>
                        <h6>5Easy Pair only supported on mobile devices running One UI 1.0 or later and Galaxy Book series PCs
                            launched 2020 or later.6Auto Switch only supported on mobile devices (smartphones and tablets)
                            running One UI 3.1 or later and watches that are Galaxy Watch4 Series or later. Devices must be logged
                            in to the same Samsung account and have Bluetooth and Wi-Fi turned on. Earbuds must be paired with both
                            your phone and tablet at least once.</h6>
                        <img src="/images/headphone/headphones/Man-using-wireless-headphones-_-Photo-Shutterstock.jpg"></img>
                    </Col>

                </Row>

            </Container>



            <Container className='mainheadphone2'>
            <Row className='rowone'>
                    <Col md="6" className='colone'>
                        <h1>Pairs almost like<br></br> magic</h1>
                        <h5>ou won’t believe how easy it is to pair Galaxy Buds2 Pro to <br></br>
                            your other Galaxy devices through your Samsung account just <br></br>
                            tap to connect as soon as you open the case.8 Once paired, <br></br>
                            Buds2 Pro show up in your list of paired devices. Then with <br></br>
                            Bluetooth Info Sync, you can effortlessly shift your Buds2 <br></br>
                            Pro between your Galaxy phone, tablet, or watch.</h5>
                            <i>8Feature only supported on devices running Samsung One UI 3.1 or later</i>
                    </Col>
                    <Col md="6" className='coltwo'>
                        <img src="/images/headphone/headphones/images-10.png"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Mainheadphone