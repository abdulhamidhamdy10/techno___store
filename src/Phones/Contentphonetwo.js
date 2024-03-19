import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function Contentphonetwo() {
    return (
        <div className='phone4'>
            <Container className='contentphonetwo'>
                <Row className='row1'>
                    <Col md="12" className='col1'>
                        <h5>DESIGN</h5>
                        <h1>Sleek. Strong. Stunning.</h1>
                        <h6>Now in titanium — the next step in tough. Experience S24 Ultra through a 6.8" flat display9 with<br></br>embedded S Pen.</h6>
                        <img src="/images/Samsung-Galaxy-S24-Ultra.png"></img>
                    </Col>
                </Row>

                <Row className='row2'>
                    <Col md="6" className='col1'>
                        <img src="/images/Samsung-S22-Ultra-Png.png"></img>
                    </Col>

                    <Col md="6" className='coltwo'>
                        <h1>Armor up with<br></br> titanium</h1>
                        <h6>Check out the upgrade — a new, sturdy shield of<br></br> titanium built right into the frame.10</h6>

                        <div className='buttons'>
                            <h4>Better scratch resistance with<br></br> Corning® Gorilla® Armor11</h4>
                            <h3>Worry-free water and dust<br></br> resistance</h3>
                        </div>
                    </Col>
                </Row>

                <Row className='row3'>
                    <Col md="6" className='col1'>
                        <img src="/images/4961a164.avif"></img>
                    </Col>
                    <Col md="6" className='coltwo'>
                        <img src="/images/Samsung-Galaxy-S22-Ultra-Green-1000x576.jpg"></img>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default Contentphonetwo;