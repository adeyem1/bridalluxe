import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="rr-hero-area rr-hero-bg pt-120 pb-120 p-relative">
      <div className="rr-hero-main-shap">
        <div className="rr-hero-shap-1 d-none d-xxl-block">
          <img src="images/shap.png" alt="Shape 1" />
        </div>
        <div className="rr-hero-shap-2">
          <img src="images/shape2.png" alt="Shape 2" />
        </div>
        <div className="rr-hero-shap-3">
          <img src="images/shape3.png" alt="Shape 3" />
        </div>
        <div className="rr-hero-shap-4">
          <img src="images/shape4.png" alt="Shape 4" />
        </div>
      </div>

      <div className="rr-hero-main-wrap">
        <div className="container">
          <div className="row gx-30">
            {/* Left Side Content */}
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="rr-hero-banner">
                <h6 className="rr-hero-subtitle wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  Hi, Meet Dreams
                </h6>
                <h2 className="rr-hero-title wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                  Your Premier Event Consultants
                </h2>
                <p className="wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                  At Y&D Bridal Luxe, we help you achieve your dream wedding and make any event unforgettable. From
                  organizing family gatherings to managing appointments with suppliers, we handle everything for you.
                  <br />
                  Whether it's a wedding, corporate event, or private celebration, we ensure every detail is taken care of.
                </p>

                <div className="rr-hero-banner-info d-flex align-items-center">
                  <div className="rr-hero-banner-btn mr-35 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                    <a className="rr-btn" href="#" onClick={() => openModal()}>
                      <span>Book A Wedding</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>

                  <div
                    className="rr-hero-banner-play d-flex align-items-center wow rrfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".9s"
                  >
                    <div className="rr-hero-banner-play z-index-2">
                      <span>
                        <a className="popup-video" href="https://www.youtube.com/watch?v=NU5x8-2p0uw">
                          <i className="fa-sharp fa-regular fa-play"></i>
                        </a>
                      </span>
                    </div>
                    <div className="rr-hero-banner-text">
                      <b>
                        <a className="popup-video" href="https://www.youtube.com/watch?v=NU5x8-2p0uw">
                          Watch Video
                        </a>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-xl-5 col-lg-5 col-md-10 col-sm-10 col-12 p-relative">
              <div className="rr-hero-thumb text-end">
                <div className="rr-hero-banner-shap">
                  <img src="images/camera.png" alt="Camera" />
                </div>
                <div className="rr-hero-main-thumb wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                  <img src="images/banner-main.jpg" width="100%" alt="Main Banner" />
                </div>
                <div className="rr-hero-sm d-none d-xxl-block wow rrfadeRight" data-wow-duration=".9s" data-wow-delay=".3s">
                  <img src="images/banner-sm.jpg" width="80%" alt="Small Banner" />
                </div>
                <div className="rr-hero-border-img wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                  <div className="rr-hero-md d-none d-md-block">
                    <img src="images/banner-md.jpg" alt="Medium Banner" />
                  </div>
                  <div className="rr-hero-border-full">
                    <img src="images/img-full.png" width="95%" alt="Full Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
