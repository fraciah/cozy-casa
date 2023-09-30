import './index.css'
import { useState } from 'react'
import { Nav } from './components/Nav'
import { Filters } from './components/Filters'
import { Card } from './components/Card'
import { Insp } from './components/Insp'
import { Footer } from './components/Footer'

function App() {
  const [term, setTerm] = useState("");
  
  return (
    <>
      <Nav />
      <Filters />
      <Card term={term}
            setTerm={setTerm}/>
      <Insp/>
      <Footer />
    </>
  )
}

export default App
