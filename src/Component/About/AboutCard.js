import React from 'react';
import '../Css/AboutCard.css';
// Import the images
import image1 from '../Image/Group 1.svg';
import image2 from '../Image/Group 2.svg';
import image3 from '../Image/Group 3.svg';
import image4 from '../Image/Group 4.svg';
import image5 from '../Image/Group 5.svg';

const AboutCard = () => {
  return (
    <>
      <section>
        <div className="container-fluid message-div pt-5 pb-3">
          <p className="services-message text-center">Why Choose <b>ApnaGhar</b></p>
        </div>

        <div className="container mt-5 border-0 pb-5">
          <div className="row row-cols-1 row-cols-md-3 justify-content-center">
            <div className="col">
              <div className="ab-card">
                <div className="card-body">
                  <img src={image1} className="ab-img" alt="Image 1" />
                  <p className="ab-Head pt-4">Fractional Real Estate Investment:</p>
                  <p className="ab-p">
                    We specialize in fractional real estate investment, allowing investors to own a fraction of a
                    commercial property. This approach provides increased affordability,
                    diversification, and flexibility compared to traditional real estate investment methods.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="ab-card">
                <div className="card-body">
                  <img src={image2} className="ab-img" alt="Image 2" />
                  <p className="ab-Head pt-4">Wide Range of Properties:</p>
                  <p className="ab-p">
                    Our platform offers a diverse portfolio 9of pre-leased commercial
                    properties across various sectors, enabling investors to choose
                    properties that align with their investment goals and risk tolerance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="ab-card">
                <div className="card-body">
                  <img src={image3} className="ab-img" alt="Image 3" />
                  <p className="ab-Head pt-4">
                    Hassle-Free Transactions:
                  </p>
                  <p className="ab-p">
                    With our user-friendly platform,
                    investors can seamlessly buy and sell fractional
                    ownership shares. We ensure a smooth and secure
                    transaction process, eliminating unnecessary complexities.
                  </p>
                </div>
              </div>
            </div>

            <div className="col mt-5">
              <div className="ab-card mt-3">
                <div className="card-body">
                  <img src={image4} className="ab-img" alt="Image 4" />
                  <p className="ab-Head pt-4">
                    Ongoing Support:
                  </p>
                  <p className="ab-p">
                    We are committed to providing ongoing support to our investors.
                    Our team of experts is readily available to address any queries,
                    provide investment guidance, and assist throughout the investment journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5">
              <div className="ab-card mt-3">
                <div className="card-body">
                  <img src={image5} className="ab-img" alt="Image 5" />
                  <p className="ab-Head pt-4">
                    Transparency and Security:
                  </p>
                  <p className="ab-p">
                    Transparency is at the core of our
                    operations. We prioritize safety and security,
                    implementing robust measures to protect investor interests.
                    Additionally, we adhere to all legal and regulatory requirements
                    to ensure a trustworthy investment experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
