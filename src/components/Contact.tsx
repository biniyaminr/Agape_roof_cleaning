import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "(619) 471-7077",
      link: "tel:619-471-7077",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "agaperoofcleaning@gmail.com",
      link: "mailto:agaperoofcleaning@gmail.com",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      content: "Mon-Sat: 8am - 6pm",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Service Area",
      content: "Lynnwood & Surrounding Areas",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] tracking-tight">
            Contact Us
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Get in touch for a free estimate
          </p>
          <div className="mt-4 sm:mt-6 h-1 w-16 sm:w-20 bg-[#FF69B4] rounded-full mx-auto"></div>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="text-center px-2">
              <div className="flex justify-center">
                <div className="rounded-full bg-[#FF69B4]/10 p-2 sm:p-3 text-[#FF69B4]">
                  {item.icon}
                </div>
              </div>
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-[#1F2A44]">
                {item.title}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 hover:text-[#FF69B4] transition-colors duration-200 break-words"
                >
                  {item.content}
                </a>
              ) : (
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 break-words">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
