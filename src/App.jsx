
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Gallery from "./components/Gallery";
import AboutSection from './components/AboutSection';
import BackToTop from './components/BackToTop';
import CtaArea from './components/CtaArea';
import FactArea from './components/FactArea';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Offcanvas from './components/Offcanvas';
import ServiceArea from './components/ServiceArea';
import TeamArea from './components/TeamArea';
import Testimonial from './components/Testimonial';
import VideoArea from './components/VideoArea';



function App() {
  return (
    <div>
     
      <Offcanvas />
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/services" element={<div>Services</div>} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
      </Routes>
    </Router>
      <HeroSection />
      <AboutSection />
      <FactArea />
      <ServiceArea />
      <VideoArea/>
      <TeamArea />
      <Testimonial/>
      <CtaArea/>
      <Footer/>
      <BackToTop />
    </div>
  );
};

export default App
