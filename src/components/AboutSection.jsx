import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="rr-about-area pt-120 pb-5 fix">
      <div className="container">
        <div className="row gx-30">
          {/* Left Image */}
          <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 p-relative wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
            <div className="rr-about-thumb rr-about-img d-flex align-items-center justify-content-center"
             style={{backgroundImage: "url('../images/img/about/img.png')",
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
            }}>
              <img src="images/shape_1.png" alt="Shape 1" />
            </div>
          </div>

          {/* Middle Content */}
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="rr-about-main-info text-center">
              <div className="rr-about-title-wrapper text-center mb-40">
                <span className="rr-section-subtitle wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  About Y&D Bridal Luxe
                </span>
                <h3 className="rr-section-title pb-15 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                  Unrivaled Scenery
                  <br />
                  Unforgettable
                </h3>
                <p className="wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                  Y&D Bridal Luxe specializes in planning weddings and all types of events, from corporate gatherings to
                  personal celebrations. Our team provides tailored services for any budget, ensuring every detail reflects
                  your unique style and vision. Let us make your event truly memorable.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 p-relative wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
          <div className ="rr-about-thumb rr-about-img d-flex align-items-center justify-content-center "
           style={{backgroundImage: "url('../images/img/about/img-2.png')",
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }} >
              <img src="images/shape_1.png" alt="Shape 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
