import React from 'react';

const CtaArea = () => {
  // Function to handle modal open
  const openModal = () => {
    // Logic to open your modal goes here
    alert("Modal open triggered");
  };

  return (
    <section className="rr-cta-wrapper rr-cta-bg-color pt-85 pb-85 fix">
      <div className="container">
        <div className="row gx-30">
          <div className="col-xl-8 col-lg-9 col-12 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
            <div className="rr-cta-content">
              <h3 className="rr-cta-title">Are You Ready to Plan a Special Day?</h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-3 col-12 wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
            <div className="rr-cta-btn mt-20 text-end">
              <a className="rr-btn-2" href="#">
                <span onClick={openModal}>Let us Know <i className="fa-sharp fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaArea;
