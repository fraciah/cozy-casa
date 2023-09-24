import './index.css'
import { useState } from 'react'
import { Nav } from './components/Nav'
import { Filters } from './components/Filters'
import { Card } from './components/Card'

function App() {
  const [term, setTerm] = useState("");
  
  return (
    <>
      <Nav />
      <Filters />
      <Card term={term}
            setTerm={setTerm}/>
    </>
  )
}

export default App
