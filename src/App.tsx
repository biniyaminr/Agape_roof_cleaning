import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services/index";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio"; // Import the Portfolio component
import ServiceForm from "./components/Services/ServiceForm";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowForm(true);
    }, 60000); // 1 minute
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <WhyChooseUs />
                <Gallery />
                <Testimonials />
                <Contact />
              </>
            }
          />
          <Route path="/services/*" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />{" "}
        </Routes>
        <Footer />
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-[#FF69B4] text-2xl font-bold"
                onClick={() => setShowForm(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <ServiceForm />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
