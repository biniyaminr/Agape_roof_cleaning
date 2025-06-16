import { Star, Quote } from "lucide-react";
import Slider from "react-slick";

const Testimonials = () => {
  const testimonials = [
    {
      name: "D. H.",
      location: "Lake Forest Park, WA",
      date: "6 Sep",
      rating: 5,
      text: "Nahom has cleaned my roof and gutters the last two years. He is hardworking and does an excellent job. The roof and surrounding garden look excellent. And, if you have time for a chat, you'll find a thoughtful and caring man.",
    },
    {
      name: "L. T.",
      location: "Lynnwood, WA",
      date: "19 Jul",
      rating: 5,
      text: "We used Agape to clean our roof and gutters of moss and found them to be hardworking, friendly, efficient, and cleaned up the mess afterward!We used Agape to clean our roof and gutters of moss and found them to be hardworking, friendly, efficient, and cleaned up the mess afterward!",
    },
    {
      name: "M. R.",
      location: "Shoreline, WA",
      date: "23 Jun",
      rating: 5,
      text: "Outstanding service from start to finish! The team was professional, thorough, and left my roof looking brand new. Their attention to detail and commitment to quality work really shows. Highly recommend their services to anyone in need of roof cleaning.",
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2A44] tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed">
            Real feedback from our valued customers
          </p>
          <div className="mt-6 h-1 w-20 bg-[#FF69B4] rounded-full mx-auto"></div>
        </div>

        {/* Slider for mobile view */}
        <div className="block md:hidden h-full">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between min-h-[400px]"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#FF69B4]/20" />

                <div className="flex mb-5">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-gray-600 mb-5 min-h-[120px] leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>

                <div className="mt-5 border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-[#1F2A44]">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500">{testimonial.location}</p>
                    </div>
                    <p className="text-sm text-gray-400">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid for desktop view */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#FF69B4]/20" />

              <div className="flex mb-5">{renderStars(testimonial.rating)}</div>

              <p className="text-gray-600 mb-5 min-h-[120px] leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="mt-5 border-t pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-[#1F2A44]">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                  <p className="text-sm text-gray-400">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
