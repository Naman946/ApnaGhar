import React from 'react';
import Logo from './Image/Logo.svg'
import'./CSS/Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm p-3 fixed-top ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="HK Logo" className="logo-img" style={{ width: '90px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item ps-5">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item ps-5">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item ps-5">
              <a className="nav-link" href="#">Vision</a>
            </li>
            <li className="nav-item ps-5">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <form className="d-flex ms-auto nav-item search-form">
            <div className="search-wrapper">
              {/* <input className="form-control me-2 p-1 ps-2" type="text" placeholder="Search" />
              <button type="submit" className="search-button">
                <i className="fa fa-search"></i>
              </button> */}
            </div>
          </form>

          <div className="dropdown nav-item">
            <button type="button" className="btn dropdown-toggle border-0" data-bs-toggle="dropdown">
              <i className="fa-regular fa-user border border-3 border-dark rounded-circle"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-center">
              <li><a className="dropdown-item" href="#">Register</a></li>
              <li><a className="dropdown-item" href="#">About</a></li>
              <li><a className="dropdown-item" href="#">Contact</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Sign in</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
