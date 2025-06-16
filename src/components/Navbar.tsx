import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavLinks = ({
  isMobile,
  onNavClick,
  onClose,
}: {
  isMobile?: boolean;
  onNavClick: (section: Section) => void;
  onClose?: () => void;
}) => {
  return (
    <>
      <button
        onClick={() => {
          onNavClick("about");
          if (onClose) onClose();
        }}
        className={`${
          isMobile ? "block px-4 py-2" : ""
        } text-[#1F2A44] hover:text-[#FF69B4] font-medium transition-colors duration-200`}
      >
        About
      </button>
      <Link
        to="/services"
        onClick={onClose}
        className={`${
          isMobile ? "block px-4 py-2" : ""
        } text-[#1F2A44] hover:text-[#FF69B4] font-medium transition-colors duration-200`}
      >
        Services
      </Link>
      <button
        onClick={() => {
          onNavClick("why-choose-us");
          if (onClose) onClose();
        }}
        className={`${
          isMobile ? "block px-4 py-2" : ""
        } text-[#1F2A44] hover:text-[#FF69B4] font-medium transition-colors duration-200`}
      >
        Why Choose Us
      </button>
      <button
        onClick={() => {
          onNavClick("gallery");
          if (onClose) onClose();
        }}
        className={`${
          isMobile ? "block px-4 py-2" : ""
        } text-[#1F2A44] hover:text-[#FF69B4] font-medium transition-colors duration-200`}
      >
        Gallery
      </button>
      <button
        onClick={() => {
          onNavClick("contact");
          if (onClose) onClose();
        }}
        className={`${
          isMobile ? "block px-4 py-2" : ""
        } text-[#1F2A44] hover:text-[#FF69B4] font-medium transition-colors duration-200`}
      >
        Contact
      </button>
      <Link
        to="/portfolio"
        onClick={onClose}
        className={`${
          isMobile ? "block px-4 py-2" : ""
        } text-[#1F2A44] hover:text-[#FF69B4] font-medium transition-colors duration-200`}
      >
        Portfolio
      </Link>
      <a
        href="tel:619-471-7077"
        className={`${
          isMobile
            ? "block px-4 py-2 text-[#FF69B4] font-semibold hover:bg-gray-100 rounded-lg transition-colors duration-200"
            : "flex items-center bg-[#FF69B4] text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:bg-[#FF85C1] hover:shadow-lg transition-all duration-300"
        }`}
      >
        {isMobile ? (
          "Call (619) 471-7077"
        ) : (
          <>
            <Phone className="w-5 h-5 mr-2" />
            (619) 471-7077
          </>
        )}
      </a>
    </>
  );
};

type Section = "about" | "why-choose-us" | "gallery" | "contact" | "portfolio";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section: Section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(section), 100);
    } else {
      scrollToSection(section);
    }
    setIsOpen(false);
  };

  const scrollToSection = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const section = location.hash.replace("#", "") as Section;
      scrollToSection(section);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <nav className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://i.ibb.co/zTFYc7JB/Logo.jpg"
                alt="Agape Roof Cleaning Logo"
                className="h-10 w-10 mr-3 rounded-full"
              />
            </Link>
            <span className="text-2xl font-semibold text-[#1F2A44]">
              Agape Roof Cleaning
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks onNavClick={handleNavClick} />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1F2A44] hover:text-[#FF69B4] transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-md">
          <div className="px-3 pt-3 pb-4 space-y-2 sm:px-4">
            <NavLinks
              isMobile={true}
              onNavClick={handleNavClick}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
