import Header from './components/Header'
import Hero from './components/Hero'
import ResultsSection from './components/ResultsSection'
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
