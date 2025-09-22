import useGsapSmoothScroll from './components/animations/useGsapSmoothScroll';
import Header from './components/page/Header'
import Hero from './components/page/Hero'
import ResultsSection from './components/page/ResultsSection'
import './App.css'
import ModernLoader from './components/loader/ModernLoader';

function App() {
  useGsapSmoothScroll();
  return (
    <>
      <ModernLoader />
      <div className='p-8'>
        <Header />
        <div>
          <Hero />
          <ResultsSection />
        </div>
      </div>
    </>
  )
}

export default App
