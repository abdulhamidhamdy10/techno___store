import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function Mainphone() {
    return (
        <div className='phone5'>
            <Container fluid className='mainphone'>
                <Row className='rowone' >
                    <Col className='colone'>
                        <h1>HUAWEI P60 Pro</h1>
                        <h4>Vision Enlightened</h4>
                        <img src="/images/huawei-nova-10.png"></img>
                    </Col>
                </Row>

                <Row className='rowtwo'>
                    <Col md="12" className='colone'>
                        <h1>Which Series Is Best for You?</h1>
                    </Col>
                </Row>
            </Container>


            <Container className='mainphonetwo'>
                <Row className='rowone'>
                    <Col md="4" >
                        <div className='colone'>
                            <h3>P Series</h3>
                            <img src="/images/1 (1).jpg"></img>
                        </div>
                    </Col>

                    <Col md="4" >
                        <div className='coltwo'>
                            <h3>Mate Series</h3>
                            <img src="/images/Huawei-P50-Pro.jpg"></img>
                        </div>
                    </Col>

                    <Col md="4" >
                        <div className='colthree'>
                            <h3>nova Series</h3>
                            <img src="/images/HUAWEI-P60-Pro-large.webp"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Mainphone;