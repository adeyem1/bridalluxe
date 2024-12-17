import React, { useState } from "react";
import ContactModal from "./ContactModal";

const CtaArea = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="rr-cta-wrapper rr-cta-bg-color pt-85 pb-85 fix">
      <div className="container">
        <div className="row gx-30">
          <div
            className="col-xl-8 col-lg-9 col-12 wow rrfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="rr-cta-content">
              <h3 className="rr-cta-title">
                Are You Ready to Plan a Special Day?
              </h3>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-3 col-12 wow rrfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".9s"
          >
            <div className="rr-cta-btn mt-20 text-end">
              <a
                className="rr-btn-2"
                onClick={handleButtonClick} // Trigger modal open
                style={{ cursor: "pointer" }} // Make it clear it's clickable
              >
               <span>Let us Know </span> <i className="fa-sharp fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Render the modal when isModalOpen is true */}
      {isModalOpen && <ContactModal onClose={closeModal} />}
    </section>
  );
};

export default CtaArea;
