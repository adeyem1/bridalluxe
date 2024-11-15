import React from 'react';

const Header = () => {
  return (
    <header className="rr-header-main z-index-3">
      <div id="header-sticky" className="rr-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-5 col-5">
              <div className="rr-header-logo">
                <a href="index.html">
                  <img src="/images/logo.png" width="60%" alt="img" />
                </a>
              </div>
            </div>
            <div className="col-xl-8 col-lg-1 col-1">
              <div className="rr-header-main-menu d-none d-xl-block mr-10 p-relative">
                <nav className="rr-main-menu-content text-end rr-header-1-before">
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-6">
              <div className="rr-header-right d-flex align-items-center justify-content-end p-relative">
                <div className="rr-header-contat d-none d-md-block ml-30">
                  <a className="rr-btn" href="#">
                    <span onClick={() => openModal()}>Book Now</span>{' '}
                    <i className="fa-sharp fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="rr-header-bar d-xl-none">
                  <button className="rr-menu-bar">
                    <i className="fa-solid fa-bars "></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
