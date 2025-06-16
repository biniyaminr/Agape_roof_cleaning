import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CheckCircle } from "lucide-react";

const images = [
  "https://i.ibb.co/zWHGPN8g/Whats-App-Image-2025-03-05-at-21-34-21-2.jpg",
  "https://i.ibb.co/Nn3Pj7fm/Whats-App-Image-2025-03-05-at-21-36-16-2.jpg",
  "https://i.ibb.co/5W39xk39/Whats-App-Image-2025-03-05-at-21-33-01-5.jpg",
  "https://i.ibb.co/PZKv4qSP/Whats-App-Image-2025-03-05-at-21-33-02-1.jpg",
  "https://i.ibb.co/Rk4ygXG7/Whats-App-Image-2025-03-05-at-21-33-02-2.jpg",
];

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Professional Expertise",
      description:
        "Licensed and insured professionals with years of experience in roof cleaning and maintenance.",
    },
    {
      title: "Quality Guaranteed",
      description:
        "We stand behind our work with a satisfaction guarantee on all our services.",
    },
    {
      title: "Eco-Friendly Solutions",
      description:
        "Using environmentally responsible cleaning products that are safe for your home and the environment.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Fair and transparent pricing with free estimates for all services.",
    },
    {
      title: "Local Service",
      description:
        "Proudly serving Lynnwood and surrounding areas with personalized attention.",
    },
    {
      title: "Customer-First Approach",
      description:
        "Led by Nahom, our team prioritizes customer satisfaction and attention to detail.",
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
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    prevArrow: (
      <button
        className="slick-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
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
        className="slick-next absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
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
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2A44] tracking-tight mb-8">
              Why Choose AGAPE Roof Cleaning?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FF69B4] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1F2A44]">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Section */}
          <div className="order-1 lg:order-2 mb-12 lg:mb-0">
            <div className="relative">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} className="px-2">
                    <div className="relative h-[500px] rounded-xl shadow-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`Professional roof cleaning service ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4 bg-[#1F2A44]/70 text-white px-4 py-2 rounded-lg text-sm">
                        Professional Roof Cleaning Service
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
