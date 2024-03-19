import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Headhome() {
    return (
        <div>
            
            <div className='headhome'>
                <Container>
                    <Row className='rowone'>
                        <Col md="3">
                            <img data-wow-delay="0.2s" className='span3 wow bounceInUp uptodown' src="/images/new-smartwatch-balancing-with-hand.jpg"></img>
                        </Col>
                        <Col md="3">
                            <img data-wow-delay="0.4s" className='span3 wow bounceInDown downtoup' src="/images/pexels-nao-triponez-129208.jpg"></img>
                        </Col>
                        <Col md="3">
                            <img data-wow-delay="0.2s" className='span3 wow bounceInUp uptodown' src="/images/pexels-pixabay-207589.jpg"></img>
                        </Col>
                        <Col md="3">
                            <Row>
                                <Col md="6">
                                <img data-wow-delay="0.4s" className='span3 wow bounceInDown downtoup' src="/images/pexels-pavel-danilyuk-8000624.jpg"></img>
                                </Col>
                                <Col md="6">
                                <img data-wow-delay="0.2s" className='span3 wow bounceInUp uptodown' src="/images/pexels-dina-nasyrova-3825517.jpg"></img>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div>

        </div>
    )
}
export default Headhome;