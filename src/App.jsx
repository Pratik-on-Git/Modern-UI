import Header from './components/page/Header'
import Hero from './components/page/Hero'
import ResultsSection from './components/page/ResultsSection'
import './App.css'

function App() {
  return (
    <div className='p-8'>
      <Header />
      <div>
        <Hero />
        <ResultsSection />
      </div>
    </div>
  )
}

export default App
