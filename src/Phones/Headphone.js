import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function Headphone() {
  return (
    <div className='phone1'>
      <Container className='headphone'>
        <Row className='row1'>
          {/* header  */}
          <Col md="12" className='col1'>
            <h3>A Guided Tour of</h3>
            <h1>IPhone 15 & Pro</h1>
            <h1>IPhone 14 & Pro</h1>
            <h1>IPhone 13 </h1>
          </Col>
          {/* header  */}

        </Row>
      </Container>
    </div>
  )
}
export default Headphone;