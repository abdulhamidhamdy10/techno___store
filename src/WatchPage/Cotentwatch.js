import React from 'react'
import { Container,Row,Col } from 'reactstrap';


 function Cotent() {
  return (
    <div className='watch3'>
        <Container className='contentwatch'>
            <Row className='rowone'>
                <Col md="12">
                <h1>Better days start with <br></br>better sleep</h1>
                <img src="/images/watches_PNG9902.png"></img>
                <h6>Advanced Sleep Coaching1 gives you the insights you need to superlight<br></br>
                  develop better sleep habits and unlock your day’s full potential.new <br></br>
                  Plan your bedtime, detect snoring14 and understand sleep stages. Plus, the<br></br>
                   Fabric Band makes sleeping in your Galaxy Watch6 even more comfortable.</h6>
                </Col>
            </Row>

            <Row className='rowtwo'>
              <Col md="5">
                <div className='col1'>
                  <Row>
                    <Col md="4">
                      <img src="/images/Apple-Watch-Apple-Watch-Iwatch-PNG-Image.png"></img>
                    </Col>
                    <Col md="8">
                      <h6>New superlight design</h6>
                      <h2>Fabric Band15</h2>
                      <h5>Soft, comfy and ready for bed comfy</h5>
                      <button>learn more</button>
                    </Col>
                  </Row>
                </div>
              </Col>


              <Col md="7">
                <div className='col2'>
                  <Row>
                      <Col md="4">
                        <img src="/images/Apple-Watch-SE_lineup.png"></img>
                      </Col>
                      <Col md="8">
                        <h2>Track your period on your wrist</h2>
                        <h5>Your Galaxy Watch6 uses skin temperature readings, measured while you sleep, to help track your monthly period, 
                          ovulation cycle and fertility windows.16 All collected data is encrypted and stored securely on your own device.</h5>
                      </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row className='rowthree'>
              <Col>
                <h1>15<sub>sec</sub></h1>
                <h3><i class="fa-solid fa-heart" style={{color:"red"}}></i> 74 bpm</h3>
                <img src="/images/heart-rate-pulse-icon-on-transparent-background-free-png.png"></img>
              </Col>
            
            </Row>




        </Container>

        <Container fluid>
            <Row className='rowfour'>
              <Col md="12">
                <h6>.</h6>
              </Col>
            </Row>
            </Container>
    </div>
  )
}

export default Cotent