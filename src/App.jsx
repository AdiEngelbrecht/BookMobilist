import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Booking from './components/Booking';
import Footer from './components/Footer';

import DashboardPreview from './components/DashboardPreview';
import UseCases from './components/UseCases';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import RealityRacingPitch from './components/RealityRacingPitch';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
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
    <Router>
      <div className="bg-black min-h-screen selection:bg-accent selection:text-black relative">
        <div className="bg-noise"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <DashboardPreview />
              <Stats />
              <Features />
              <UseCases />
              <Booking />
            </>
          } />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/reality-racing" element={<RealityRacingPitch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
