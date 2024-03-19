import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function Contentphone() {
    return (
        <div className='phone3'>
            <Container fluid className='cotentphone'>
                <Row className='row1'>
                    <Col md="6" className='col1'>
                        <img src="/images/galaxy-s22-ultra.png"></img>
                    </Col>
                    <Col md="6" className='coltwo'>
                        <img src="/images/Samsung-Galaxy-Logo.png"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Contentphone;