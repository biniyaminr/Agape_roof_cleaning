import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-0 sm:left-4 z-20 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full shadow-lg transition-all duration-300"
  >
    <FaChevronLeft size={14} />
  </button>
);

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-0 sm:right-4 z-20 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full shadow-lg transition-all duration-300"
  >
    <FaChevronRight size={14} />
  </button>
);

const Hero = () => {
  const slides = [
    {
      image: "https://i.ibb.co/tMWpM1tj/Roof-Clean.jpg",
      title: "Expert Roof Cleaning Solutions",
      description:
        "Serving Lynnwood and surrounding areas with top-tier roof cleaning services. Protect your home with our eco-friendly approach.",
      alt: "Professional roof cleaning in action",
    },
    {
      image: "https://i.ibb.co/278HXfm3/Moss-Cleaning-RR.jpg",
      title: "Moss Removal Specialists",
      description:
        "Safe and effective moss removal to extend your roof's lifespan. Professional service you can trust.",
      alt: "Roof moss removal process",
    },
    {
      image: "https://i.ibb.co/JWP9Qwyk/Gutter-Cleaning.jpg",
      title: "Residential Roof Care",
      description:
        "Comprehensive roof cleaning for homes in Lynnwood and beyond. Eco-friendly solutions for lasting results.",
      alt: "Clean residential roof",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "ease-in-out",
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative pt-20">
      <div className="relative w-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-[500px] sm:h-[600px] md:h-[700px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  className="w-full h-full object-cover object-center"
                  src={slide.image}
                  alt={slide.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1F2A44]/50 to-[#1F2A44]/30"></div>
              </div>

              {/* Content with Animation */}
              <div className="relative max-w-7xl mx-auto py-12 sm:py-28 md:py-36 px-12 sm:px-16 lg:px-24 text-center h-full flex flex-col justify-start animate-slide-up z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight animate-fade-in">
                  {slide.title}
                </h1>

                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
                  {slide.description}
                </p>

                {/* Call-to-Action Buttons */}
                <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fade-in-delay-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-[#FF69B4] rounded-lg shadow-md hover:bg-[#FF85C1] hover:shadow-lg transition-all duration-300"
                  >
                    Get a Free Quote
                  </a>
                  <a
                    href="tel:425-773-3101"
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-[#FF69B4] bg-white rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    Call Now: (425) 773-3101
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
