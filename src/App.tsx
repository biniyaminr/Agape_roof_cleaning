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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
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
      </div>
    </Router>
  );
}

export default App;
