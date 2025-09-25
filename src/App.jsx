import React, { useState, useEffect } from 'react';
import useGsapSmoothScroll from './components/animations/useGsapSmoothScroll';
import Header from './components/page/Header'
import Hero from './components/page/Hero'
import ResultsSection from './components/page/ResultsSection'
import EarnMore from './components/page/EarnMore';
import AdvantagesSection from './components/page/advantagesSection';
import './App.css'
import Tarrif from './components/page/Tarrif';
import ModernLoader from './components/loader/ModernLoader';
import Cases from './components/page/Cases';
function App() {
  useGsapSmoothScroll();
  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      {!showContent && <ModernLoader onComplete={handleLoaderComplete} />}
      {showContent && (
        <div className='p-8'>
          <Header />
          <div>
            <Hero />
            <ResultsSection />
            <EarnMore />
            <AdvantagesSection />
            <Cases />
            <Tarrif />
          </div>
        </div>
      )}
    </>
  );
}

export default App
