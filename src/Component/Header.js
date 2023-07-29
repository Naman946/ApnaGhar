import React, { useEffect } from 'react';
import './Css/header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';



const Header = () => {
  useEffect(() => {
    (function () {
      "use strict";

      /**
       * Easy selector helper function
       */
      const select = (el, all = false) => {
        el = el.trim();
        if (all) {
          return [...document.querySelectorAll(el)];
        } else {
          return document.querySelector(el);
        }
      };

      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener));
          } else {
            selectEl.addEventListener(type, listener);
          }
        }
      };

      /**
       * Easy on scroll event listener
       */
      const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener);
      };

      /**
       * Back to top button
       */
      let backtotop = select('.back-to-top');
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add('active');
          } else {
            backtotop.classList.remove('active');
          }
        };
        window.addEventListener('load', toggleBacktotop);
        onscroll(document, toggleBacktotop);
      }

      /**
       * Search window open/close
       */
      let body = select('body');
      on('click', '.navbar-toggle-box', function (e) {
        e.preventDefault();
        body.classList.add('box-collapse-open');
        body.classList.remove('box-collapse-closed');
      });

      on('click', '.close-box-collapse', function (e) {
        e.preventDefault();
        body.classList.remove('box-collapse-open');
        body.classList.add('box-collapse-closed');
      });
    })();
  }, []);

  return (
    <>
        {/* <!-- ======= Property Search Section ======= --> */}
    <div class="click-closed"></div>
    {/* <!--/ Form Search Star /--> */}
    <div class="box-collapse">
        <div class="title-box-d">
            <h3 class="title-d">Search Property</h3>
        </div>
        <span class="close-box-collapse right-boxed bi bi-x"></span>
        <div class="box-collapse-wrap form">
            <form class="form-a">
                <div class="row">
                    <div class="col-md-12 mb-2">
                        <div class="form-group">
                            <label class="pb-2" for="Type">Keyword</label>
                            <input type="text" class="form-control form-control-lg form-control-a"
                                placeholder="Keyword"/>
                        </div>
                    </div>
                    <div class="col-md-6 mb-2">
                        <div class="form-group mt-3">
                            <label class="pb-2" for="Type">Type</label>
                            <select class="form-control form-select form-control-a" id="Type">
                                <option>All Type</option>
                                <option>For Rent</option>
                                <option>For Sale</option>
                                <option>Open House</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 mb-2">
                        <div class="form-group mt-3">
                            <label class="pb-2" for="city">City</label>
                            <select class="form-control form-select form-control-a" id="city">
                                <option>All City</option>
                                <option>Alabama</option>
                                <option>Arizona</option>
                                <option>California</option>
                                <option>Colorado</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 mb-2">
                        <div class="form-group mt-3">
                            <label class="pb-2" for="bedrooms">Bedrooms</label>
                            <select class="form-control form-select form-control-a" id="bedrooms">
                                <option>Any</option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 mb-2">
                        <div class="form-group mt-3">
                            <label class="pb-2" for="garages">Garages</label>
                            <select class="form-control form-select form-control-a" id="garages">
                                <option>Any</option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 mb-2">
                        <div class="form-group mt-3">
                            <label class="pb-2" for="bathrooms">Bathrooms</label>
                            <select class="form-control form-select form-control-a" id="bathrooms">
                                <option>Any</option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 mb-2">
                        <div class="form-group mt-3">
                            <label class="pb-2" for="price">Min Price</label>
                            <select class="form-control form-select form-control-a" id="price">
                                <option>Unlimite</option>
                                <option>₹50,0000</option>
                                <option>₹100,0000</option>
                                <option>₹150,0000</option>
                                <option>₹200,0000</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-b">Search Property</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    {/* <!-- End Property Search Section -->> */}

    {/* <!-- ======= Header/Navbar ======= --> */}
    <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div class="container">
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false"
                aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <a class="navbar-brand text-brand" href="index.html">Apna<span class="color-b">Ghar</span></a>

            <div class="navbar-collapse collapse " id="navbarDefault">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <Link className="nav-link " to="/">Home</Link>
                    </li>

                    <li class="nav-item">
                    <Link className="nav-link " to="About">AboutUs</Link>
                    </li>

                    <li class="nav-item">

                        <Link to="/Service" className="nav-link">Service</Link>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link " href="blog-grid.html">Latest</a>

                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Property</a>
                        <div class="dropdown-menu">
                            {/* <!-- <a class="dropdown-item " href="property-single.html">Property Single</a> --> */}
                            <a class="dropdown-item " href="#">Latest</a>
                            <a class="dropdown-item " href="#">Upcoming</a>
                            
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>

            <button type="button" class="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse mx-3"
                data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                <i class="bi bi-search "></i>
            </button>

            <li class="nav-item dropdown mx-2">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
<i class="bi bi-person person rounded-circle " aria-hidden="true"></i>           
     </a>
                <div class="dropdown-menu">
                    {/* <!-- <a class="dropdown-item " href="property-single.html">Property Single</a> --> */}
                    <a class="dropdown-item " href="#">Login</a>
                    <a className="dropdown-item " href="#">Register</a>
                    
                </div>
            </li>
            
            

        </div>
    </nav>
    </>
  )
}

export default Header
