import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Bodyhome() {
    return (
        <div className='bodyhome'>
            <Container className='containerone'>
                <Row className='rowone'>
                    <Col md="4" xs="6" >
                        <div animation-duration="1s" className='colone animate__animated animate__bounceInLeft'>
                            <img src="/images/Apple-Logo-2007.png"></img>

                        </div>
                    </Col>
                    <Col md="4" xs="6" >
                        <div className='coltwo animate__animated animate__bounceInLeft'>
                            <img src="/images/Huawei-Logo.png"></img>

                        </div>
                    </Col>
                    <Col md="4" xs="6" >
                        <div className='colthree animate__animated animate__bounceInLeft'>

                            <img src="/images/Hewlett-Packard-Logo-2008-2014.png"></img>
                        </div>
                    </Col>
                    <Col md="4" xs="6">
                        <div className='colfour animate__animated animate__bounceInLeft'>
                            <img src="/images/Lenovo-logo-vector.png" alt="Lenovo Logo" />
                        </div>
                    </Col>
                    <Col md="4" xs="6" >
                        <div className='colfive animate__animated animate__bounceInLeft'>

                            <img src="/images/Samsung-Logo.png"></img>
                        </div>
                    </Col>
                    <Col md="4" xs="6" >
                        <div delay="0.5s" className='colsix animate__animated animate__bounceInLeft'>
                            <img src="/images/logo-asus-yogiancreative.png"></img>

                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default Bodyhome;