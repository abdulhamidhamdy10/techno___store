import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function HeadLabtops() {
  return (

    <div class="image-container">
      <div id="carouselExampleCaptions" class="carousel slide" data-mdb-ride="carousel" data-mdb-carousel-init>
        <div class="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/A4GDK27VMnz6LtFDy9yzk.jpg" class="d-block w-100" alt="Wild Landscape" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images/alienware-x-series-laptops-scaled.jpg" class="d-block w-100" alt="Camera" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images/Best-AMD-ryzen-7000-series-laptop-guide-.jpg" class="d-block w-100" alt="Exotic Fruits" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images/Gaming-Laptop-2.jpg" class="d-block w-100" alt="Exotic Fruits" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images/o-BEST-PERFORMING-WINDOWS-LAPTOP-facebook.jpg" class="d-block w-100" alt="Exotic Fruits" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
export default HeadLabtops;