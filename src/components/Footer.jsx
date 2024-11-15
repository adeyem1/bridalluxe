import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="rr-footer-main p-relative fix">
        {/* Footer area start */}
        <div className="rr-footer-area pt-85 p-relative" style={{ backgroundColor: '#d9b99b' }}>
          <div className="container">
            <div className="row gx-30 boxer">
              {/* Column 1 - Logo and About */}
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow rrfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="rr-footer-widget footer-cols-1">
                  <div className="rr-footer-logo pb-20">
                    <a href="index.html">
                      <img src="/images/logo.png" width="50%" alt="logo" />
                    </a>
                  </div>
                  <div className="rr-footer-widget-content mb-25">
                    <p>
                      Creating unforgettable moments, one celebration at a time.
                      <br />
                      Y&D Bridal Luxe.
                    </p>
                  </div>
                  <div className="rr-footer-social d-flex align-items-center">
                    <span>Follow Us:</span>
                    <a href="https://www.instagram.com/ydbridalluxe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13 1H5C2.79086 1 1 2.79086 1 5V13C1 15.2091 2.79086 17 5 17H13C15.2091 17 17 15.2091 17 13V5C17 2.79086 15.2091 1 13 1Z"
                          stroke="#051145"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.2 8.49624C12.2987 9.16204 12.185 9.84201 11.875 10.4395C11.565 11.0369 11.0745 11.5214 10.4733 11.824C9.87204 12.1266 9.19071 12.2319 8.52618 12.125C7.86165 12.0181 7.24776 11.7043 6.77183 11.2284C6.29589 10.7524 5.98214 10.1385 5.87521 9.47401C5.76828 8.80948 5.87361 8.12816 6.17622 7.52694C6.47882 6.92572 6.9633 6.43523 7.56074 6.12523C8.15818 5.81523 8.83816 5.70151 9.50395 5.80024C10.1831 5.90095 10.8118 6.21741 11.2973 6.70289C11.7828 7.18836 12.0992 7.8171 12.2 8.49624Z"
                          stroke="#051145"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.4 4.6001H13.408"
                          stroke="#051145"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 2 - Contact */}
              <div
                className="footer col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow rrfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="rr-footer-widget footer-cols-1">
                  <h4 className="rr-footer-title">Contact</h4>
                  <div className="rr-footer-widget-content mb-25">
                    <p>Would you have any enquiries. Please feel free to contact us</p>
                    <div className="rr-footer-widget-content-item">
                      <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.4 1H13.6C14.37 1 15 1.63 15 2.4V10.8C15 11.57 14.37 12.2 13.6 12.2H2.4C1.63 12.2 1 11.57 1 10.8V2.4C1 1.63 1.63 1 2.4 1Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 2.3999L8 7.2999L1 2.3999"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <a href="mailto:ydbridalluxe@gmail.com">ydbridalluxe@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 - Gallery */}
              <div
                className="footer col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow rrfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="rr-footer-widget footer-cols-3">
                  <h4 className="rr-footer-title">Gallery</h4>
                  <div className="rr-footer__widget-gallery-wrap">
                    <div className="row gx-5">
                      {[
                        'img_1.jpg',
                        'img-2.jpg',
                        'img-3.jpg',
                        'img-4.jpg',
                        'img-5.jpg',
                        'img-6.jpg',
                      ].map((image, index) => (
                        <div className="col-xl-4 col-lg-4 col-md-3 col-4 p-1" key={index}>
                          <div className="rr-footer__widget-gallery p-relative">
                            <a href={`images/${image}`} className="our-gallery__item popup-image">
                              <img src={`images/${image}`} alt={`Gallery Image ${index}`} />
                              <span>
                                <i className="fa-solid fa-plus"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer area end */}

        {/* Copyright area start */}
        <div className="rr-copyright-area p-relative" style={{ backgroundColor: '#000000' }}>
          <div className="container rr-copyright-space">
            <div className="row align-items-center">
              <div
                className="col-xl-12 wow rrfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="rr-copyright-left text-center">
                  <p>
                    © 2024 <a href="#"> Y&D bridal luxe.</a> Design By adesanyadeyemi. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright area end */}
      </div>
    </footer>
  );
};

export default Footer;
