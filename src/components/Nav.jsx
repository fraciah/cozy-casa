import { BiSearch } from "react-icons/bi"
import { FaAirbnb } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"
import { IoMdContact } from "react-icons/io"
import { TbWorld } from "react-icons/tb"

export function Nav() {
  
  return (
    <>
    <div className="border-b py-1 sm:py-4 px-5 sm:px-10 flex flex-wrap justify-between items-center">

      <div className="flex items-center font-bold text-xl sm:text-2xl cursor-pointer">
        <FaAirbnb className="text-rose-500 text-3xl sm:text-4xl"/>
        <h1 className="text-rose-500 ml-1">airbnb</h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center mt-2 sm:mt-0 sm:ml-20">
        <div className="flex border rounded-3xl py-2 pl-3 pr-2 sm:pl-6 sm:pr-1 ml-0 sm:ml-4 cursor-pointer items-center shadow hover:shadow-md">
          <h3 className="font-semibold text-gray-700 text-xs sm:text-base">Anywhere<span className="border-r border-slate-400 mx-1 sm:mx-4"></span></h3>
          <h3 className="font-semibold text-gray-600 text-xs sm:text-base">Any week<span className="border-r border-slate-400 mx-1 sm:mx-4"></span></h3>
          <h3 className="mr-1 sm:mr-4 text-gray-400 text-xs sm:text-base">Add guests</h3>
          <h3 className="rounded-full bg-rose-500 text-xs sm:text-base text-white p-1 sm:p-2"><BiSearch/></h3>
        </div>
      </div>

      <div className="flex items-center mt-2 sm:mt-0 cursor-pointer">
        <h3 className="p-3 text-sm sm:text-base rounded-3xl font-semibold text-gray-600 mr-3 hover:bg-gray-50">Airbnb your home</h3>
        <div className="p-2 rounded-3xl mr-3 hover:bg-gray-100">
            <TbWorld className="text-xl"/>
        </div>
        <div className="border rounded-3xl flex items-center p-1 text-gray-500 hover:shadow-lg">
          <HiMenu className="text-lg sm:text-xl mx-2"/>
          <IoMdContact className="text-2xl sm:text-4xl"/>
        </div>
      </div>

    </div>
    </>
  )
}