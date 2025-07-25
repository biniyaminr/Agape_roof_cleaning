import { Routes, Route } from "react-router-dom";
import ServicesList from "./ServicesList";
import ServiceDetail from "./ServiceDetail";
import ServiceForm from "./ServiceForm";

const Services = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1F2A44] tracking-tight font-bankMedium">
                  Our Services
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-700 font-bankMediumBT">
                  Professional Roof Cleaning Services to Protect and Maintain
                  Your Home
                </p>
                <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  At Agape Roof Cleaning, we deliver exceptional service with a
                  commitment to customer satisfaction. Led by Nahom, our team
                  excels in attention to detail, prompt responses, and fair
                  pricing. We build trust through quality craftsmanship and
                  strong client relationships.
                </p>
                <div className="mt-8 h-1 w-20 bg-[#FF69B4] rounded-full mx-auto"></div>
              </div>

              {/* Services List */}
              <ServicesList />
              {/* Service Form and Message Side by Side */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="bg-[#F9FAFB] rounded-lg shadow p-6 md:p-8 flex flex-col justify-center text-center md:text-left">
                  <h3 className="text-2xl font-bold text-[#1F2A44] mb-4">Send Us a Message</h3>
                  <p className="text-gray-700 text-base md:text-lg">
                    Have questions about our roof cleaning services, need help scheduling an appointment, or want to learn more about how we protect and restore your roof? We're here to help!
                  </p>
                </div>
                <ServiceForm />
              </div>
            </div>
          </section>
        }
      />

      <Route path=":id" element={<ServiceDetail />} />
    </Routes>
  );
};

export default Services;
