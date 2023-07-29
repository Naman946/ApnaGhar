import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import './Css/ImageSlider.css'

const ImageSlider = () => {
  useEffect(() => {
    // Initialize the Owl Carousel
    const imageSlider = document.querySelector('.image-slider1');
    if (imageSlider) {
      window.jQuery(imageSlider).owlCarousel({
        loop: true,
        margin: 10,
        autoplay:true,
        nav: true,
        navText:["←","→"],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
            merge:true,
          },
          1000: {
            items: 5,
          },
        },
      });
    }
  }, []);

  return (
    <section className="wraper  p-4 ml-4"  >
      <div className="owl-carousel owl-theme image-slider1 " style={{ marginTop: '10%' }}>
        <div className="item">
          <img src="https://i.ibb.co/wCGFk6Q/Untitldsed-1.jpg" alt="Slider 1" />
        </div>
        <div className="item">
          <img src="https://i.ibb.co/wCGFk6Q/Untitldsed-1.jpg" alt="Slider 2" />
        </div>
        <div className="item">
          <img src="https://i.ibb.co/wCGFk6Q/Untitldsed-1.jpg" alt="Slider 2" />
        </div>
        <div className="item">
          <img src="https://i.ibb.co/wCGFk6Q/Untitldsed-1.jpg" alt="Slider 2" />
        </div>
        <div className="item">
          <img src="https://i.ibb.co/wCGFk6Q/Untitldsed-1.jpg" alt="Slider 2" />
        </div>
        <div className="item">
          <img src="https://i.ibb.co/wCGFk6Q/Untitldsed-1.jpg" alt="Slider 2" />
        </div>
        <div className="item">
          <img src="https://i.ibb.co/wCGFk6Q/Untitldsed-1.jpg" alt="Slider 2" />
        </div>
        <div className="item">
          <img src="https://i.ibb.co/wCGFk6Q/Untitldsed-1.jpg" alt="Slider 2" />
        </div>
        {/* Add more items here */}
      </div>
    </section>
  );
};

export default ImageSlider;
