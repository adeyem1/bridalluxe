import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="rr-about-area pt-120 pb-5 fix">
      <div className="container flex flex-col items-center ">
        <div className="flex items-center">
         
          {/* Middle Content */}
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="rr-about-main-info text-center">
              <div className="rr-about-title-wrapper text-center mb-40">
                <span
                  className="rr-section-subtitle wow rrfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  About Y&D Bridal Luxe
                </span>
                <h3
                  className="rr-section-title pb-15 wow rrfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  Unrivaled Scenery
                  <br />
                   Unforgettable
                </h3>
                <p
                  className="wow rrfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  Y&D Bridal Luxe specializes in planning weddings and all
                  types of events, from corporate gatherings to personal
                  celebrations. Our team provides tailored services for any
                  budget, ensuring every detail reflects your unique style and
                  vision. Let us make your event truly memorable.
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
