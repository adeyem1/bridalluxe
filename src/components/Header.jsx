import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="rr-header-main z-index-3">
        <div id="header-sticky" className="rr-header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-5 col-5">
                <div className="rr-header-logo">
                  <Link to="/">
                    <img src="/images/logo.png" width="60%" alt="img" />
                  </Link>
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
                      {/* <li>
                        <Link to="/gallery">Gallery</Link>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-6">
                <div className="rr-header-right d-flex align-items-center justify-content-end p-relative">
                  <div className="rr-header-contat d-none d-md-block ml-30">
                    <button
                      className="rr-btn"
                      style={{ cursor: "pointer" }}
                      onClick={openModal} // Open modal when clicked
                    >
                      <span>Book Now</span>{" "}
                      <i className="fa-sharp fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="rr-header-bar d-xl-none">
                    <button className="rr-menu-bar">
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Render the ContactModal when isModalOpen is true */}
      {isModalOpen && <ContactModal onClose={closeModal} />}
    </>
  );
};

export default Header;
