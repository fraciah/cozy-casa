import { useState } from "react"
import { Card } from "./Card"

export function Home() {
  const [term, setTerm] = useState("")

  return (
    <>
    <div className="sm:p-5 p-4 bg-slate-100 flex flex-col items-center">
      <h1 className="text-2xl font-semibold tracking-wide mb-2">Image Gallery</h1>
      <form className="flex flex-wrap justify-center">
        <input type="text" placeholder="Search..." className="border-2 border-rose-500 px-4 sm:py-3 py-2 rounded-lg mr-2 w-full sm:w-auto max-w-xs sm:max-w-md"/>
        <button className="bg-rose-500 text-white px-4 sm:py-3 py-2 rounded-lg mt-2 sm:mt-0 w-full sm:w-auto max-w-xs sm:max-w-md font-semibold tracking-wide">Search</button>
      </form>
    </div>
      <Card term={term}
            setTerm={setTerm}/>
    </>
  )
}