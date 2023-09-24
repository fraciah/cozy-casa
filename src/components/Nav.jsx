import { BiSearch } from "react-icons/bi"
import { FaAirbnb } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"
import { IoMdContact } from "react-icons/io"
import { TbWorld } from "react-icons/tb"

export function Nav() {
  
  return (
    <>
    <div className="border-b py-4 px-10 flex justify-between items-center">

      <div className="hidden sm:flex items-center font-bold text-2xl cursor-pointer">
        <FaAirbnb className="text-rose-500 text-4xl"/>
        <h1 className="text-rose-500 ml-1">airbnb</h1>
      </div>

      <div className="flex border rounded-3xl py-2 pl-6 pr-2 ml-24 cursor-pointer items-center shadow hover:shadow-md">
        <h3 className="font-semibold text-gray-700">Anywhere<span className="border-r border-slate-400 mx-4"></span></h3>
        <h3 className="font-semibold text-gray-600">Any week<span className="border-r border-slate-400 mx-4"></span></h3>
        <h3 className="mr-4 text-gray-400">Add guests</h3>
        <h3 className="rounded-full bg-rose-500 text-white p-2"><BiSearch/></h3>
      </div>

      <div className="flex items-center cursor-pointer">
        <h3 className="p-3 rounded-3xl font-semibold text-gray-600 mr-3 hover:bg-gray-50">Airbnb your home</h3>
        <div className="p-2 rounded-3xl mr-3 hover:bg-gray-100">
            <TbWorld className="text-xl"/>
        </div>
        <div className="border rounded-3xl flex items-center p-1 text-gray-500 hover:shadow-lg">
          <HiMenu className="text-xl mx-2"/>
          <IoMdContact className="text-4xl"/>
        </div>
      </div>

    </div>
    </>
  )
}