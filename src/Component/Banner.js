import React from 'react';
import './Css/Banner.css'
import architectureImage from './Image/Banner.svg';


const Banner = () => {
  return (
    <>
    
    <div id="carouselExampleControls" className="carousel slide  pt-4 pb-5 mt-5" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={architectureImage} className="d-block w-100 h-75" alt="..." />
          <div className="search-bar">
            {/* Your search bar code goes here */}
            <input type="text" className='s1' placeholder="Your City Code" />
            <button type="button"  className='mx-1'>Search</button>
          </div>
        </div>
       
      </div>
    
    </div>
    
    </>
  );
}

export default Banner;
