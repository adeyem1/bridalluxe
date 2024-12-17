import React from 'react';

const BackToTop = () => {
  return (
    
    <div className="back-to-top-wrapper">
      <button id="back_to_top" type="button" className="back-to-top-btn">
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
          <path
            d="M11 6L6 1L1 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;
