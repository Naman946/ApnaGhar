import React from 'react';
import '../Css/header.css'; // Make sure to adjust the path to the CSS file if needed.
import backgroundImage from '../Image/beauti.jpg'; // Import the image

const About = () => {
  return (
    <>
      <div
        className="hero page-inner overlay"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 text-center mt-5">
              <h1 className="heading" data-aos="fade-up">
                About
              </h1>

              <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                <ol className="breadcrumb text-center justify-content-center bg-transparent">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
