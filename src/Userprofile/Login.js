import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function Login() {
    return (
        <div className='login'>
            <div className='mt-5 pt-5'></div>
            <Container className='form'>
                <Row className='rowone'>
                    <Col md="12" className='rowtwo'>
                        <h1 className='mt-5 pt-5 text-center animate__backInUp'>| TECHNO STORE |</h1>
                        {/* <h2><i class="fa-regular fa-hand-point-right"></i></h2>
                        <h3><i class="fa-regular fa-hand-point-down"></i></h3> */}
                    </Col>
                    <Col md="12" className='colone'>

                        {/* form  */}
                        <form >
                            <Row>
                                <Col md="1">
                                    <div class="form-group">
                                        <h5><i class="fa-solid fa-user" ></i></h5>
                                    </div>
                                </Col>

                                {/* first & last Name  */}
                                <Col md="6">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">First Name</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </Col>
                                <Col md="5">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Last Name</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </Col>
                                {/* first & last Name  */}


                            {/* email & password  */}
                                <Col md="1">
                                    <div class="form-group">
                                        <h5><i class="fa-solid fa-envelope" ></i></h5>
                                    </div>
                                </Col>
                                <Col md="11">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </Col>


                                <Col md="1">
                                    <div class="form-group">
                                        <h5><i class="fa-solid fa-lock" ></i></h5>
                                    </div>
                                </Col>
                                <Col md="11">
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" />
                                    </div>
                                </Col>
                            {/* email & password  */}



                                {/* submit  */}
                                <Col md="12" className='text-center colone'>
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input text-center" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">I accept <a href="">Terms Of Use</a></label>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                                </Col>

                                {/* submit  */}

                                <Col md="6" className='text-center coltwo'>
                                    <button type="submit" class="btn  btn-block"><h4><i class="fa-brands fa-google-plus-g"></i></h4></button>
                                </Col>
                                <Col md="6" className='text-center colthree'>
                                    <button type="submit" class="btn  btn-block"><h4><i class="fa-brands fa-facebook"></i></h4></button>
                                </Col>
                            </Row>
                        </form>

                        {/* form  */}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Login;