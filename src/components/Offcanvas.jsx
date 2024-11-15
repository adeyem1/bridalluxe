import React from 'react';

const Offcanvas = () => {
  return (
    <div className="rroffcanvas-area">
      <div className="rroffcanvas">
        <div className="rroffcanvas__close-btn">
          <button className="close-btn">
            <i className="fal fa-times"></i>
          </button>
        </div>
        <div className="rroffcanvas__logo">
          <a href="index.html"></a>
        </div>
        <div className="rr-main-menu-mobile d-xl-none"></div>
        <div className="rroffcanvas__contact-info">
          <div className="rroffcanvas__contact-title">
            <h5>Contact us</h5>
          </div>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:ydbridalluxe@gmail.com">ydbridalluxe@gmail.com</a>
            </li>
            <li>
              <a href="https://www.instagram.com/ydbridalluxe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <i className="fab fa-instagram"> instagram</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="body-overlay"></div>
    </div>
  );
};

export default Offcanvas;
