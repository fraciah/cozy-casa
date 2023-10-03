import './index.css'
import { useState, useEffect } from 'react'
import { Nav } from './components/Nav'
import { Filters } from './components/Filters'
import { Card } from './components/Card'
import { Insp } from './components/Insp'
import { Footer } from './components/Footer'

function App() {
  const [term, setTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  return (
    <>
      <div className={`sticky top-0 w-full bg-white ${isScrolled ? 'border-b shadow-md' : ''}`}>
        <Nav />
        <Filters />
      </div>
      <Card term={term}
            setTerm={setTerm}/>
      <Insp/>
      <Footer />
    </>
  )
}

export default App
