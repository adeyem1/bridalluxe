import React from "react";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/images/logo.png",
      alt: "Gallery Image 1",
    },
    {
      src: "/images/img-2.jpg",
      alt: "Gallery Image 2",
    },
    {
      src: "/images/img_1.jpg",
      alt: "Gallery Image 3",
    },
    {
      src: "/images/img-3.jpg",
      alt: "Gallery Image 4",
    },
    {
      src: "/images/img-4.jpg",
      alt: "Gallery Image 5",
    },
    {
      src: "/images/img-5.jpg",
      alt: "Gallery Image 6",
    },
    {
      src: "/images/img-6.jpg",
      alt: "Gallery Image 7",
    },
    {
      src: "/images/img-7.jpg",
      alt: "Gallery Image 8",
    },
  ];

  return (
    <div className="gallery-container p-10">
      <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item w-full h-64 overflow-hidden rounded shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
