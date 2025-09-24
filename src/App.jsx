import React, { useState, useEffect } from 'react';
import useGsapSmoothScroll from './components/animations/useGsapSmoothScroll';
import Header from './components/page/Header'
import Hero from './components/page/Hero'
import ResultsSection from './components/page/ResultsSection'
import EarnMore from './components/page/EarnMore';
import AdvantagesSection from './components/page/advantagesSection';
import './App.css'
import ModernLoader from './components/loader/ModernLoader';
import Cases from './components/page/Cases';
function App() {
  useGsapSmoothScroll();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Wait for loader to finish before showing content
    const loaderTimeout = setTimeout(() => setShowContent(true), 1800);
    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <>
      {!showContent && <ModernLoader />}
      {showContent && (
        <div className='p-8'>
          <Header />
          <div>
            <Hero />
            <ResultsSection />
            <EarnMore />
            <AdvantagesSection />
            <Cases />
          </div>
        </div>
      )}
    </>
  );
}

export default App
