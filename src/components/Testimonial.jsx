import React, { useEffect } from 'react';

import 'swiper/swiper-bundle.css';


const Testimonial = () => {
  

  return (
    <section className="rr-testimonial-area p-relative pt-110 pb-120 fix">
      <div className="container p-relative">
        <div className="row gx-30">
          <div className="rr-section-title-wrapper mb-60 text-center p-relative z-index-2">
            <span className="rr-section-subtitle">Our Testimonial</span>
            <h3 className="rr-section-title">Our Client's Feedback</h3>
          </div>
        </div>
        <div className="row">
          <div className="rr-testimonial-shap d-none d-lg-block">
            <span>{/* Add your SVG shape here */}</span>
          </div>
          <div className="rr-testimonial-wrapper mb-50">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="rr-testimonial-item d-flex align-items-start">
                    <div className="rr-testimonial-content">
                      <div className="rr-testimonial-star">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>
                            <svg
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                            >
                              <path
                                d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                                fill="#FFB016"
                              ></path>
                            </svg>
                          </span>
                        ))}
                      </div>
                      <p>
                        "Fantastic experience! Y&D Bridal Luxe turned our vision
                        into reality with ease and elegance. Highly recommend
                        them for any event!"
                      </p>
                      <h4 className="rr-testimonial-title">Anna & Mark</h4>
                    </div>
                  </div>
                </div>
                {/* Add more Swiper slides as needed */}
              </div>
              {/* Pagination */}
              <div className="swiper-pagination"></div>
            </div>
          </div>
          {/* Testimonial Arrows */}
          <div className="rr-testimonial-arrow-box">
            <button className="testimonial-arrow-next">
              <svg
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
              >
                <path
                  d="M12 22L2 12L12 2"
                  stroke="#001D08"
                  strokeOpacity="0.3"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button className="testimonial-arrow-prev">
              <svg
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
              >
                <path
                  d="M2 22L12 12L2 2"
                  stroke="#001D08"
                  strokeOpacity="0.3"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
