import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const images = [
    {
      url: "https://i.ibb.co/5W39xk39/Whats-App-Image-2025-03-05-at-21-33-01-5.jpg",
      alt: "Professional roof cleaning in progress",
    },
    {
      url: "https://i.ibb.co/PZKv4qSP/Whats-App-Image-2025-03-05-at-21-33-02-1.jpg",
      alt: "Roof cleaning with safety equipment",
    },
    {
      url: "https://i.ibb.co/Rk4ygXG7/Whats-App-Image-2025-03-05-at-21-33-02-2.jpg",
      alt: "Waterfront home roof cleaning",
    },
    {
      url: "https://i.ibb.co/kV3tvtc2/Whats-App-Image-2025-03-05-at-21-34-20-1.jpg",
      alt: "Moss removal from roof",
    },
    {
      url: "https://i.ibb.co/xKYbzdj6/Whats-App-Image-2025-03-05-at-21-34-20.jpg",
      alt: "Clean roof after service",
    },
    {
      url: "https://i.ibb.co/twPqTVyG/Whats-App-Image-2025-03-05-at-21-34-21.jpg",
      alt: "Roof cleaning process",
    },
  ];

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
    customPaging: (i: number) => (
      <button
        className="w-3 h-3 rounded-full bg-gray-400 hover:bg-[#FF69B4] transition-colors"
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    prevArrow: (
      <button
        className="slick-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20 sm:left-8 lg:left-4"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 text-[#1F2A44]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    ),
    nextArrow: (
      <button
        className="slick-next absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20 sm:right-8 lg:right-4"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 text-[#1F2A44]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    ),
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2A44] tracking-tight">
            Our Work
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed">
            See the quality of our services through our recent projects
          </p>
          <div className="mt-6 h-1 w-20 bg-[#FF69B4] rounded-full mx-auto"></div>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <div className="relative h-[600px] rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#1F2A44]/70 text-white px-4 py-2 rounded-lg text-sm">
                    {image.alt}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
