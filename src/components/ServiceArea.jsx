import React from 'react';

const services = [
  {
    title: 'Flower Design',
    imgSrc: 'images/img.jpg',
    description:
      'Our flower design service adds elegance and beauty to your wedding, with custom arrangements from bridal bouquets to centerpieces. We work closely with you to match your theme and style, creating a stunning ambiance for your special day.',
  },
  {
    title: 'Wedding Co-ordinate',
    imgSrc: 'images/img2.jpg',
    description:
      'Our wedding coordination service ensures a seamless and stress-free celebration. From vendor management to on-the-day execution, we handle every detail with precision and care, allowing you to enjoy your wedding day without worry, knowing everything is perfectly managed.',
  },
  {
    title: 'Photoshoot',
    imgSrc: 'images/img3.jpg',
    description:
      'Capture every magical moment with our professional photoshoot service. From engagement sessions to wedding day photography, we ensure every detail is beautifully documented. Our photographers create timeless images that reflect your unique love story, preserving your memories forever.',
  },
  {
    title: 'Makeup Artist',
    imgSrc: 'images/img4.jpg',
    description:
      'Our skilled makeup artists create flawless looks tailored to your style, enhancing your natural beauty for your special day. From soft, romantic styles to bold, glamorous looks, we ensure you feel confident and radiant throughout your wedding celebration.',
  },
  {
    title: 'Invitation',
    imgSrc: 'images/img5.jpg',
    description:
      'Make a lasting first impression with our custom wedding invitations. We design elegant, personalized invitations that reflect your unique love story and theme. From classic to contemporary, our designs set the perfect tone for your unforgettable celebration.',
  },
  {
    title: 'Best Restaurant',
    imgSrc: 'images/img6.jpg',
    description:
      'Delight your guests with exceptional cuisine from our carefully selected restaurant partners. We offer diverse menu options, from gourmet dishes to local favorites, ensuring a memorable dining experience that perfectly complements your wedding celebration and satisfies every palate.',
  },
];

const ServiceArea = () => {
  return (
    <section id="services" className="rr-service-area pt-20 pb-50 p-relative fix">
      <div className="rr-service-shap">
        <img src="images/shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="row gx-30">
          <div className="rr-section-title-wrapper mb-40 text-center">
            <span className="rr-section-subtitle wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              Our Services
            </span>
            <h3 className="rr-section-title wow rrfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
              Complete Event Planning
            </h3>
          </div>
        </div>
        <div className="row gx-30">
          {services.map((service, index) => (
            <div
              key={index}
              className={`col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 wow rrfadeUp`}
              data-wow-duration=".9s"
              data-wow-delay={`.${index + 3}s`}
            >
              <div className="rr-service-item text-center mb-30">
                <div className="rr-service-thumb">
                  <img src={service.imgSrc} alt={service.title} />
                </div>
                <div className="rr-service-content">
                  <h4 className="rr-service-title">{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
