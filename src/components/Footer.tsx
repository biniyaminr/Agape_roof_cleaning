import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(section), 100);
    } else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkClass =
    "text-gray-300 hover:text-[#FF69B4] transition-colors duration-200 cursor-pointer";

  return (
    <footer className="bg-[#1F2A44]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Agape Roof Cleaning
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Providing professional roof cleaning services in Lynnwood and
              surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <span
                  onClick={() => navigate("/services")}
                  className={linkClass}
                >
                  Services
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleNavClick("why-choose-us")}
                  className={linkClass}
                >
                  Why Choose Us
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleNavClick("contact")}
                  className={linkClass}
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Information
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong>Phone:</strong> (619) 471-7077
              </li>
              <li>
                <strong>Hours:</strong> Mon-Sat, 8 AM - 6 PM
              </li>
              <li>
                <strong>Service Area:</strong> Lynnwood, WA & surrounding
                regions
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-[#FF69B4]/20 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Agape Roof Cleaning. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
