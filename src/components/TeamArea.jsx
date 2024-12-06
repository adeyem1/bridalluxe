import React from 'react';



const TeamArea = () => {

  return (
    <section className="rr-team-area pt-120 pb-70 fix">
         <div className="container">
            <div className="row gx-30">
               <div className="rr-section-title-wrapper mb-40 text-center">
                  <span className="rr-section-subtitle wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">Our
                     Team</span>
                  <h3 className="rr-section-title wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">Meet The
                     Professionals</h3>
               </div>
            </div>
            <div className="row gx-30 team-members">
               <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow rrfadeUp team-border" data-wow-duration=".9s" data-wow-delay=".3s">
                  <div className="rr-team-item text-center mb-50">
                     <div className="rr-team-thumb ">
                        <img className="team-member-photo" src="images/team-1.jpg"   alt=""/>
                        <div className="rr-team-social">
                          
                           <a href="https://www.instagram.com/ybbeauty?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M13 1H5C2.79086 1 1 2.79086 1 5V13C1 15.2091 2.79086 17 5 17H13C15.2091 17 17 15.2091 17 13V5C17 2.79086 15.2091 1 13 1Z" stroke="#54595F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                 <path d="M12.2 8.49624C12.2987 9.16204 12.185 9.84201 11.875 10.4395C11.565 11.0369 11.0745 11.5214 10.4733 11.824C9.87207 12.1266 9.19074 12.2319 8.52621 12.125C7.86169 12.0181 7.24779 11.7043 6.77186 11.2284C6.29592 10.7524 5.98217 10.1385 5.87524 9.47401C5.76831 8.80948 5.87364 8.12816 6.17625 7.52694C6.47886 6.92572 6.96333 6.43523 7.56077 6.12523C8.15821 5.81523 8.83819 5.70151 9.50399 5.80024C10.1831 5.90095 10.8119 6.21741 11.2973 6.70289C11.7828 7.18836 12.0993 7.8171 12.2 8.49624Z" stroke="#54595F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                 <path d="M13.4 4.6001H13.408" stroke="#54595F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>

                           </a>
                        </div>
                     </div>
                     <div className="rr-team-content team-name">
                        <h4 className="rr-team-title">Yaya</h4>
                        <span>CEO &amp; Founder</span>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6 col-12  wow rrfadeUp team-border" data-wow-duration=".9s" data-wow-delay=".4s">
                  <div className="rr-team-item text-center mb-50">
                     <div className="rr-team-thumb ">
                        <img className="team-member-photo" src="images/team-2.jpg"  alt=""/>
                        <div className="rr-team-social">
                           <a href="https://www.instagram.com/diamond_dashiki?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M13 1H5C2.79086 1 1 2.79086 1 5V13C1 15.2091 2.79086 17 5 17H13C15.2091 17 17 15.2091 17 13V5C17 2.79086 15.2091 1 13 1Z" stroke="#54595F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                 <path d="M12.2 8.49624C12.2987 9.16204 12.185 9.84201 11.875 10.4395C11.565 11.0369 11.0745 11.5214 10.4733 11.824C9.87207 12.1266 9.19074 12.2319 8.52621 12.125C7.86169 12.0181 7.24779 11.7043 6.77186 11.2284C6.29592 10.7524 5.98217 10.1385 5.87524 9.47401C5.76831 8.80948 5.87364 8.12816 6.17625 7.52694C6.47886 6.92572 6.96333 6.43523 7.56077 6.12523C8.15821 5.81523 8.83819 5.70151 9.50399 5.80024C10.1831 5.90095 10.8119 6.21741 11.2973 6.70289C11.7828 7.18836 12.0993 7.8171 12.2 8.49624Z" stroke="#54595F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                 <path d="M13.4 4.6001H13.408" stroke="#54595F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>

                           </a>
                        </div>
                     </div>
                     <div className="rr-team-content">
                        <h4 className="rr-team-title"><a href="team-details.html">Diamond</a></h4>
                        <span>CEO &amp; Founder</span>
                     </div>
               </div>
            </div>
         </div>
      </div>
      </section>
  );
};

export default TeamArea;
