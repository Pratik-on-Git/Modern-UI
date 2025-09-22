import { useState, useEffect } from 'react';
import ModernLoader from './components/loader/ModernLoader';
import useGsapSmoothScroll from './components/animations/useGsapSmoothScroll';
import Header from './components/page/Header'
import Hero from './components/page/Hero'
import ResultsSection from './components/page/ResultsSection'
import './App.css'

function App() {
  useGsapSmoothScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1.5s or until window load
    const handleLoad = () => setLoading(false);
    window.addEventListener('load', handleLoad);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading && <ModernLoader />}
      <div className='p-8'>
        <Header />
        <div>
          <Hero />
          <ResultsSection />
        </div>
      </div>
    </>
  );
}

export default App
