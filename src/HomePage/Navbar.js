import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function Navbar() {
    return (
        <div >
          
            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">

                <div class="home container-fluid">

                    <Link to="/" ><h1 className='Technostore'>| TECHNO STORE |</h1></Link >
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* element navbar  */}
                            <li class="nav-item"><Link class="nav-link" to="/AllLabtops">LabTops</Link ></li>

                            <li  class="nav-item"><Link class="nav-link" to="/Allphonespages">Phones</Link ></li>

                            <li  class="nav-item"><Link class="nav-link" to="/Allwatchpages">Watches</Link ></li>

                            <li  class="nav-item"><Link class="nav-link" to="/Allheadphone">HeadPhones</Link></li>
                            {/* element navbar  */}
                            

                        </ul>
                        

                        {/* end navbar  */}
                        <form class="d-flex" role="search">
                            <button  class="btn btn-outline-success" type="submit"><Link class="nav-link" to="/Allproducts">Products <i class="fa-solid fa-money-bill-wave"></i> </Link></button>
                            <button  class="btn btn-outline-success" type="submit"><Link class="nav-link" to="/Alltablepage"><i class="fa-solid fa-cart-plus"></i> </Link></button>
                            <button  class="btn btn-outline-success" type="submit"><Link class="nav-link" to="/Alluserprofile"><i class="fa-solid fa-user"></i> </Link></button>
                        </form>
                        {/* end navbar  */}

                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;