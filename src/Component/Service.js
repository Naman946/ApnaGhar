import React from 'react';
import './Css/Service.css'
import { Link } from 'react-router-dom';

import heroImage from './Image/beauti.jpg';

const Service = () => {
  return (
    <>
      <div className="hero page-inner overlay" style={{backgroundImage: `url(${heroImage})`}}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 text-center mt-5">
              <h1 className="heading" data-aos="fade-up">Services</h1>

              <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                <ol className="breadcrumb text-center justify-content-center  bg-transparent">
                  <li className="breadcrumb-item"> <Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Services</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div className="box-feature mb-4">
                <span className="flaticon-house mb-4 d-block"></span>
                <h3 className="text-black mb-3 font-weight-bold">Quality Properties</h3>
                <p className="text-black-50">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p><a href="#" className="learn-more">Read more</a></p>
              </div>
            </div>
            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
              <div className="box-feature mb-4">
                <span className="flaticon-house-2 mb-4 d-block-3"></span>
                <h3 className="text-black mb-3 font-weight-bold">Top Rated Agent</h3>
                <p className="text-black-50">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p><a href="#" className="learn-more">Read more</a></p>
              </div>
            </div>
            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
              <div className="box-feature mb-4">
                <span className="flaticon-building mb-4 d-block"></span>
                <h3 className="text-black mb-3 font-weight-bold">Property for Sale</h3>
                <p className="text-black-50">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p><a href="#" className="learn-more">Read more</a></p>
              </div>
            </div>
            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
              <div className="box-feature mb-4">
                <span className="flaticon-house-3 mb-4 d-block-1"></span>
                <h3 className="text-black mb-3 font-weight-bold">House for Sale</h3>
                <p className="text-black-50">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p><a href="#" className="learn-more">Read more</a></p>
              </div>
            </div>

            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div className="box-feature mb-4">
                <span className="flaticon-house-4 mb-4 d-block"></span>
                <h3 className="text-black mb-3 font-weight-bold">Quality Properties</h3>
                <p className="text-black-50">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p><a href="#" className="learn-more">Read more</a></p>
              </div>
            </div>
            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
              <div className="box-feature mb-4">
                <span className="flaticon-building mb-4 d-block-3"></span>
                <h3 className="text-black mb-3 font-weight-bold">Top Rated Agent</h3>
                <p className="text-black-50">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p><a href="#" className="learn-more">Read more</a></p>
              </div>
            </div>
            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
              <div className="box-feature mb-4">
                <span className="flaticon-house mb-4 d-block"></span>
                <h3 className="text-black mb-3 font-weight-bold">Property for Sale</h3>
                <p className="text-black-50">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p><a href="#" className="learn-more">Read more</a></p>
              </div>
            </div>
            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
              <div className="box-feature mb-4">
                <span className="flaticon-house-1 mb-4 d-block-1"></span>
                <h3 className="text-black mb-3 font-weight-bold">House for Sale</h3>
                <p className="text-black-50">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p><a href="#" className="learn-more">Read more</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
