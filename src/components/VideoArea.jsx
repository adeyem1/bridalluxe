import React from "react";

const VideoArea = () => {
  return (
    <section
      className="rr-video-main p-relative fix"
      style={{ backgroundImage: `url('../images/img/video/bg-image.jpg')` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 d-flex justify-content-center align-items-center">
            <div className="rr-video-wrap">
              <div className="rr-video-play">
                <span>
                  <a
                    className="popup-video d-flex justify-content-center align-items-center"
                    href="https://www.youtube.com/watch?v=NU5x8-2p0uw"
                  >
                    <svg
                      width="17"
                      height="22"
                      viewBox="0 0 17 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L16 11L1 21V11V1Z"
                        stroke="#1B7262"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoArea;
