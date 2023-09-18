import { useState } from "react"
import { Card } from "./Card"

export function Home() {
  const [term, setTerm] = useState("")

  return (
    <>
      <h1>Image Gallery</h1>
      <input type="text" placeholder="Search..." />
      <button>Search</button>
      <Card term={term}
            setTerm={setTerm}/>
    </>
  )
}