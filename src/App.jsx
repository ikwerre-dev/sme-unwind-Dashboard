import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import MainSection from './components/Mainsection';
import AboutSection from './components/AboutSection';
import CountdownSection from './components/CountdownSection';
import BrandSection from './components/BrandSection';
import FeatureSection from './components/FeatureSection';
import EventSchedule from './components/EventSchedule';
import QASection from './components/QASection';
import GallerySection from './components/GallerySection';
import CTASection from './components/CTASection';
import Footer from './components/FooterSection';
import './App.css';
import PricingPlan from './components/PricingSection';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  
      smooth: true,
      direction: 'vertical',  
      gestureDirection: 'vertical', 
      smoothTouch: true,  
      touchMultiplier: 1.5,  
    });

     function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

     return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <MainSection />
      <CountdownSection />
      <AboutSection />
      <PricingPlan />
      <BrandSection />
      <FeatureSection />
      <EventSchedule />
      <QASection />
      <GallerySection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
