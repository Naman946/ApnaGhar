import React, { useEffect, useRef } from 'react';
import './Css/Card.css'
import houseImage1 from './Image/img_1.jpg';
import houseImage2 from './Image/img_2.jpg';
import houseImage3 from './Image/img_3.jpg';
import houseImage4 from './Image/img_4.jpg';
import houseImage5 from './Image/img_5.jpg';
import houseImage6 from './Image/img_6.jpg';
import 'font-awesome/css/font-awesome.min.css';


const Card = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = './js/script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div  >

<br/>
<br/>
<br/>
<div className='pt-5'> <h3 class="css-vysyam">Popular <span>Projects</span></h3></div>
      <div className="owl-carousel pt-5 mt-5" >
      
        <div className="item shadow">
          <a className="popup-youtube" href="https://example.com">
            <img src={houseImage2} alt="Image" className="img-fluid rounded img1" />
            <i className="fa fa-play" aria-hidden="true"></i>
          </a>

          <div class="card-footer ">
            <h6 class="card-title text-info text-left"><strong>Bapat Indore</strong></h6>
            <h5 class="div-Sec text-left"><b>₹2000000</b></h5>
            <p class="div-sub text-left">ITPL, Whitefield, Bengaluru, Karnataka</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="border-right pr-3">
                <p class="div-sub text-right text-success">Bedrooms</p>
                <p class="div-p text-Center text-dark">2</p>
              </div>
              <div class="border-right pr-3">
                <p class="div-sub text-right text-success">Bath</p>
                <p class="div-p text-Center text-dark">2</p>
              </div>

              <div class="mr-5">
                <p class="div-sub text-success">Propety</p>
                <p class="div-p text-Center text-dark">For Sell</p>
              </div>
            </div>
          

            <div class="justify-content-center text-center">
              <button type="button" class="btn btn-outline-success rounded-pill ">Click for visit</button>
              

            </div>
          </div>
        </div>
        <div className="item shadow">
          <a
            className="popup-youtube"
            href="https://www.youtube.com/shorts/Vz_6azu1u_c"
          >
            <img
              src={houseImage3} alt="Image" className="img-fluid rounded img1"
            />
            <i className="fa fa-play" aria-hidden="true"></i>
          </a>
          <div class="card-footer">
            <h6 class="card-title text-info text-left"><strong>Bapat Indore</strong></h6>
            <h5 class="div-Sec text-left"><b>₹2000000</b></h5>
            <p class="div-sub text-left">ITPL, Whitefield, Bengaluru, Karnataka</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="border-right pr-3">
                <p class="div-sub text-right text-success">Bedrooms</p>
                <p class="div-p text-Center text-dark">2</p>
              </div>
              <div class="border-right pr-3">
                <p class="div-sub text-right text-success">Bath</p>
                <p class="div-p text-Center text-dark">2</p>
              </div>

              <div class="mr-5">
                <p class="div-sub text-success">Propety</p>
                <p class="div-p text-Center text-dark">For Sell</p>
              </div>
            </div>
          

            <div class="justify-content-center text-center">
              <button type="button" class="btn btn-outline-success rounded-pill ">Click for visit</button>
              

            </div>
          </div>
        </div>
        <div className="item shadow">
          <a className="popup-text" href="#1">
            <img
              src={houseImage3} alt="Image" className="img-fluid rounded img1" />
            <i className="fa fa-newspaper-o" aria-hidden="true"></i>
          </a>
          <div class="card-footer">
            <h6 class="card-title text-info text-left"><strong>Bapat Indore</strong></h6>
            <h5 class="div-Sec text-left"><b>₹2000000</b></h5>
            <p class="div-sub text-left">ITPL, Whitefield, Bengaluru, Karnataka</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="border-right pr-3">
                <p class="div-sub text-right text-success">Bedrooms</p>
                <p class="div-p text-Center text-dark">2</p>
              </div>
              <div class="border-right pr-3">
                <p class="div-sub text-right text-success">Bath</p>
                <p class="div-p text-Center text-dark">2</p>
              </div>

              <div class="mr-5">
                <p class="div-sub text-success">Propety</p>
                <p class="div-p text-Center text-dark">For Sell</p>
              </div>
            </div>
          

            <div class="justify-content-center text-center">
              <button type="button" class="btn btn-outline-success rounded-pill ">Click for visit</button>
              

            </div>
          </div>
          <div id="1" className="mfp-hide white-popup-block popup-text">
           
            <span>- Opal Ingram</span>
          </div>
        </div>

        <div className="item shadow">
          <a className="popup-text" href="#">
            <img src={houseImage1}  alt="Image" className="img-fluid rounded img1"   />
            <i className="fa fa-newspaper-o" aria-hidden="true"></i>
          </a>
          <div class="card-footer">
            <h6 class="card-title text-info text-left"><strong>Bapat Indore</strong></h6>
            <h5 class="div-Sec text-left"><b>₹2000000</b></h5>
            <p class="div-sub text-left">ITPL, Whitefield, Bengaluru, Karnataka</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="border-right pr-3">
                <p class="div-sub text-right text-success">Bedrooms</p>
                <p class="div-p text-Center text-dark">2</p>
              </div>
              <div class="border-right pr-3">
                <p class="div-sub text-right text-success">Bath</p>
                <p class="div-p text-Center text-dark">2</p>
              </div>

              <div class="mr-5">
                <p class="div-sub text-success">Propety</p>
                <p class="div-p text-Center text-dark">For Sell</p>
              </div>
            </div>
          

            <div class="justify-content-center text-center">
              <button type="button" class="btn btn-outline-success rounded-pill ">Click for visit</button>
              

            </div>
          </div>
          <div id="2" className="mfp-hide white-popup-block popup-text">
            <p>
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu.
            </p>
            <span>- Rick Baleno</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
