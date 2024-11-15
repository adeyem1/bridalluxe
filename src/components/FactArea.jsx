import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import "../../css/animate.css"; // For scroll animations

const FactArea = () => {
  const [startCounting, setStartCounting] = useState(false);
  const factRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Stop observing once counting starts
        }
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    if (factRef.current) {
      observer.observe(factRef.current);
    }

    return () => {
      if (factRef.current) observer.unobserve(factRef.current);
    };
  }, []);

  return (
    <div className="rr-funfact-area pt-30 pb-100 p-relative fix" ref={factRef}>
      <div className="container">
        <div className="rr-funfact-shap d-none d-lg-block">
          <img src="/images/full01.png" alt="Shape 1" />
        </div>
        <div className="rr-funfact-shap-2 d-none d-lg-block">
          <img src="/images/full02.png" alt="Shape 2" />
        </div>

        <div className="rr-funfact pt-40 pb-40 p-relative fix ">
          <div className="row gx-30 text-lg">
            {[
              { end: 10, label: "Happy Couples", delay: 0.3 },
              { end: 15, label: "Weddings", delay: 0.5 },
              { end: 30, label: "Decoration", delay: 0.7 },
              { end: 25, label: "Locations", delay: 0.9 },
            ].map((item, index) => (
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
                key={index}
              >
                <div className="rr-funfact-content text-center fix p-relative">
                  <div className="rr-funfact-number d-flex align-items-center justify-content-center">
                    <h5 className="rr-funfact-number text-">
                      {startCounting && (
                        <CountUp 
                          start={0} 
                          end={item.end} 
                          duration={2 + item.delay} // Customize duration
                          useEasing={true} 
                        />
                      )}
                    </h5>
                    {item.label === "Decoration" || item.label === "Locations" ? (
                      <b></b>
                    ) : null}
                  </div>
                  <div className="rr-funfact-text">
                    <span>{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactArea;
