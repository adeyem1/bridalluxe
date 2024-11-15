
import './App.css'

import '../css/animate.css'
import '../css/magnific-popup.css'
import '../css/main.css'
import '../js/smooth-scroll'

import AboutSection from './components/AboutSection';
import BackToTop from './components/BackToTop';
import ContactModal from './components/ContactModal';
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
import '../js/smooth-scroll'


function App() {
  return (
    <div>
     
      <Offcanvas />
      <Header />
      <HeroSection />
      <AboutSection />
      <FactArea />
      <ServiceArea />
      <VideoArea/>
      <TeamArea />
      <Testimonial/>
      <ContactModal />
      <CtaArea/>
      <Footer/>
      <BackToTop />
    </div>
  );
};

export default App
