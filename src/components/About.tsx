import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://i.ibb.co/Nn3Pj7fm/Whats-App-Image-2025-03-05-at-21-36-16-2.jpg",
  "https://i.ibb.co/5W39xk39/Whats-App-Image-2025-03-05-at-21-33-01-5.jpg",
];

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section id="about" className="sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Carousel Section */}
          <div className="hidden sm:block relative">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`AGAPE Roof Cleaning Service ${index + 1}`}
                    className="rounded-xl shadow-lg w-full h-[450px] object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Text Section */}
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2A44] tracking-tight mb-6">
              About AGAPE Roof Cleaning
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-5">
              <p>
                AGAPE Roof Cleaning in Lynnwood, WA has built a strong
                reputation for delivering professional, efficient, and friendly
                service. Our team, led by Nahom, takes pride in providing prompt
                responses, thorough work, and fair pricing to all our customers.
              </p>
              <p>
                We believe in the power of personal connection, which is why we
                maintain time-tested business practices like door-to-door
                marketing and handshake agreements. Our comprehensive services
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Professional roof cleaning</li>
                <li>Moss killer application</li>
                <li>Gutter cleaning</li>
                <li>Minor roof repairs</li>
              </ul>
              <p>
                Our commitment to environmental responsibility is reflected in
                our use of eco-friendly cleaning solutions. We take pride in our
                attention to detail, customer service orientation, and
                reasonable pricing, making us the preferred choice for roof and
                gutter cleaning needs in the Lynnwood area.
              </p>
            </div>
          </div>

          {/* Small screen Image */}
          <div className="block sm:hidden relative mt-5">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`AGAPE Roof Cleaning Service ${index + 1}`}
                    className="rounded-xl shadow-lg w-full h-[450px] object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
