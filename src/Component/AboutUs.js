import React from 'react';
import houseImage from './Image/house-186400_1280.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faShieldAlt, faEye } from '@fortawesome/free-solid-svg-icons';
const AboutUs = () => {
  return (
    <>   
     <div class="col-12 pt-5 text-center">
            <h2 class="font-weight-bold heading text-primary mb-4">About Us</h2>
          </div>
     <div className="section pt-5">
      <div className="container">
        <div className="row justify-content-between mb-5">
          <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
            <div className="img-about dots">
            <img src={houseImage} alt="Image" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4">
  <div className="d-flex feature-h">
    <span className="wrap-icon me-3 text-center pt-4">
      <FontAwesomeIcon icon={faHome} size="2x" />
      {/* The size="2x" attribute will make the icon twice as large */}
    </span>
    <div className="feature-text">
      <h3 className="heading">Quality properties</h3>
      <p className="text-black-50">
        our commitment to excellence ensures that each project meets the highest standards. Our properties are designed to withstand the test of time, enhancing user experiences, and providing a stable and secure investment opportunity for our valued clients.
      </p>
    </div>
  </div>

  <div className="d-flex feature-h">
    <span className="wrap-icon me-3 text-center pt-4">
      <FontAwesomeIcon icon={faUser} size="2x" />
    </span>
    <div className="feature-text">
      <h3 className="heading">Top rated agents</h3>
      <p className="text-black-50">
        At our company, we take pride in offering a premium service by providing top-rated agents for all your property needs.
      </p>
    </div>
  </div>

  <div className="d-flex feature-h">
    <span className="wrap-icon me-3 text-center pt-4">
      <FontAwesomeIcon icon={faShieldAlt} size="2x" />
    </span>
    <div className="feature-text">
      <h3 className="heading">Easy To visit</h3>
      <p className="text-black-50">
        We prioritize convenience and accessibility for our valued customers by offering easy-to-visit property locations.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
    </>

  );
};

export default AboutUs;
