import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import { services } from "./servicesData";

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // State to manage expanded FAQ items
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  if (!service) {
    return (
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col justify-center items-center"
        style={{ minHeight: "calc(100vh - 14rem)" }}
      >
        <h2 className="text-4xl font-bold text-[#1F2A44] mb-6 leading-tight">
          Service Not Found
        </h2>

        <p className="text-lg text-gray-500 mb-6">
          We couldn't find the service you're looking for. Please go back to
          explore more.
        </p>

        <Link
          to="/services"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#FF69B4] rounded-full shadow-lg hover:bg-[#e55b9f] transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          <svg
            className="w-5 h-5 mr-2"
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
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 lg:py-28 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link
            to="/services"
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-[#FF69B4] bg-white rounded shadow-md hover:bg-gray-100 hover:text-black transition-all duration-300"
          >
            <svg
              className="w-4 h-4 mr-2"
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
            Back to Services
          </Link>
        </div>

        <div className="relative mb-16">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[32rem] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
              {service.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              {service.description}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {service.relatedContent}
            </p>

            {/* Benefits Section */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Benefits
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#FF69B4] mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Section */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Process
              </h2>
              <ol className="space-y-4 text-gray-700 text-lg leading-relaxed list-decimal list-inside">
                {service.process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            {/* FAQ Section */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                FAQs
              </h2>
              <div className="space-y-8">
                {service.faqs.map((faq, index) => (
                  <div key={index}>
                    <button
                      className="text-gray-800 bg-gray-100 p-3 rounded-t-md text-lg font-medium mb- w-full text-left"
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="flex justify-between items-center">
                        <span>{faq.question}</span>
                        <svg
                          className={`w-6 h-6 text-[#FF69B4] transition-transform ${
                            expandedFaqIndex === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>

                    {expandedFaqIndex === index && (
                      <p className="text-gray-700 bg-gray-100 text-lg leading-relaxed rounded-b-md p-3">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Slider Gallery */}
          <div className="lg:col-span-1">
            <Slider {...sliderSettings}>
              {service.additionalImages.map((img, index) => (
                <div key={index} className="outline-none">
                  <img
                    src={img}
                    alt={`${service.title} - Image ${index + 1}`}
                    className="w-full h-[30rem] object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
