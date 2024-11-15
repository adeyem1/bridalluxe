import React from 'react';

const TeamMember = ({ name, position, imageUrl, instagramUrl, delay }) => (
  <div
    className={`team-border wow fadeInUp relative overflow-hidden text-center`}
    data-wow-duration=".9s"
    data-wow-delay={delay}
    style={{ maxWidth: '320px', margin: '0 20px' }} // Ensures proper spacing
  >
    <div className="rr-team-item">
      <div className="rr-team-thumb relative group">
        <img
          className="team-member-photo w-full h-64 object-cover rounded-full mx-auto transition-transform transform group-hover:scale-110"
          src={imageUrl}
          alt={name}
        />
        <div className="rr-team-social absolute inset-0 flex justify-center items-center opacity-70 group-hover:opacity-100 bg-white bg-opacity-90 transition-opacity">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" mt-10 w-10 h-10 text-gray-700"
            >
              <path
                d="M13 1H5C2.79086 1 1 2.79086 1 5V13C1 15.2091 2.79086 17 5 17H13C15.2091 17 17 15.2091 17 13V5C17 2.79086 15.2091 1 13 1Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12.2 8.49624C12.2987 9.16204 12.185 9.84201 11.875 10.4395C11.565 11.0369 11.0745 11.5214 10.4733 11.824C9.87207 12.1266 9.19074 12.2319 8.52621 12.125C7.86169 12.0181 7.24779 11.7043 6.77186 11.2284C6.29592 10.7524 5.98217 10.1385 5.87524 9.47401C5.76831 8.80948 5.87364 8.12816 6.17625 7.52694C6.47886 6.92572 6.96333 6.43523 7.56077 6.12523C8.15821 5.81523 8.83819 5.70151 9.50399 5.80024C10.1831 5.90095 10.8119 6.21741 11.2973 6.70289C11.7828 7.18836 12.0993 7.8171 12.2 8.49624Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M13.4 4.6001H13.408"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="rr-team-content mt-4">
        <h4 className="rr-team-title text-lg font-bold">{name}</h4>
        <span className="text-sm text-gray-500">{position}</span>
      </div>
    </div>
  </div>
);

const TeamArea = () => {
  const teamMembers = [
    {
      name: 'Yaya',
      position: 'CEO & Founder',
      imageUrl: '/images/team-1.jpg',
      instagramUrl: 'https://www.instagram.com/ybbeauty?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      delay: '.3s',
    },
    {
      name: 'Diamond',
      position: 'CEO & Founder',
      imageUrl: '/images/team-2.jpg',
      instagramUrl: 'https://www.instagram.com/diamond_dashiki?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      delay: '.4s',
    },
  ];

  return (
    <section className="rr-team-area  pt-110 pb-120">
      <div className="container text-center">
        <div className="mb-10">
          <span
            className="text-lg font-semibold rr-section-subtitle wow fadeInUp "
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            Our Team
          </span>
          <h3
            className="text-3xl font-bold rr-section-title wow fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            Meet The Professionals
          </h3>
        </div>
        <div className="text-center flex justify-center items-center team-members">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
              instagramUrl={member.instagramUrl}
              delay={member.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
