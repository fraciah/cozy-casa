import { useState } from "react"
import { LiaFilterSolid } from "react-icons/lia"
import { HiOutlineHomeModern } from "react-icons/hi2"
import { BsFire } from "react-icons/bs"
import { BiLandscape } from "react-icons/bi"
import { TbHomeStar } from "react-icons/tb"
import { TbBeach } from "react-icons/tb"
import { MdDesk } from "react-icons/md"
import { LuSailboat } from "react-icons/lu"
import { LiaSwimmingPoolSolid } from "react-icons/lia"
import { MdKeyboardArrowRight } from "react-icons/md"
import { LiaGolfBallSolid } from "react-icons/lia"

export function Filters(){
    
    const [switchOn, setSwitchOn] = useState(false);

    const toggleSwitch = () => setSwitchOn(!switchOn);

    return(
        <>
        <div className="px-10 flex items-center pt-3 flex-wrap">
            
            <div className="flex gap-6 sm:gap-4 py-1 mr-1 text-gray-500">
                <div className="flex flex-col items-center w-10 sm:w-20 pb-3 border-b-2 border-gray-800 text-gray-800">
                    <HiOutlineHomeModern className="text-3xl"/>
                    <h1 className="text-xs">Tiny homes</h1>
                </div>
                <div className="flex flex-col items-center w-10 sm:w-20 pb-3 hover:text-gray-800 hover:border-b-2 cursor-pointer">
                    <BsFire className="text-3xl"/>
                    <h1 className="text-xs">Trending</h1>
                </div>
                <div className="flex flex-col items-center w-10 sm:w-20 pb-3 hover:text-gray-800 hover:border-b-2 cursor-pointer">
                    <MdDesk className="text-3xl"/>
                    <h1 className="text-xs">Rooms</h1>
                </div>
                <div className="flex flex-col items-center w-10 sm:w-20 pb-3 hover:text-gray-800 hover:border-b-2 cursor-pointer">
                    <TbHomeStar className="text-3xl"/>
                    <h1 className="text-xs">Design</h1>
                </div>
                <div className="flex flex-col items-center w-10 sm:w-20 pb-3 hover:text-gray-800 hover:border-b-2 cursor-pointer">
                    <TbBeach className="text-3xl"/>
                    <h1 className="text-xs">Beachfront</h1>
                </div>
                <div className="flex flex-col items-center w-10 sm:w-20 pb-3 hover:text-gray-800 hover:border-b-2 cursor-pointer">
                    <BiLandscape className="text-3xl"/>
                    <h1 className="text-xs">Amazing views</h1>
                </div>
                <div className="flex flex-col items-center w-10 sm:w-20 pb-3 hover:text-gray-800 hover:border-b-2 cursor-pointer">
                    <LuSailboat className="text-3xl"/>
                    <h1 className="text-xs text-center">Boats</h1>
                </div>
                <div className="flex flex-col items-center w-10 sm:w-20 pb-3 hover:text-gray-800 hover:border-b-2 cursor-pointer">
                    <LiaSwimmingPoolSolid className="text-3xl"/>
                    <h1 className="text-xs">Amazing pools</h1>
                </div>
                <div className="flex flex-col items-center w-10 sm:w-20 pb-3 hover:text-gray-800 hover:border-b-2 cursor-pointer">
                    <LiaGolfBallSolid className="text-3xl"/>
                    <h1 className="text-xs">Golfing</h1>
                </div>
                <div className="flex flex-col items-center justify-center rounded-full cursor-pointer p-2  w-9 h-9 border hover:shadow-md transform transition duration-500 ease-in-out hover:scale-110">
                    <MdKeyboardArrowRight className="text-2xl text-black"/>
                </div>
            </div>

            <div className="flex border py-4 px-5 rounded-xl items-center cursor-pointer mx-5 mt-5 md:mt-0">
                <LiaFilterSolid className="mr-1"/>
                <h1 className="text-xs font-semibold">Filters</h1>
            </div>

            <div className="flex border py-3 px-4 rounded-xl items-center cursor-pointer mt-5 md:mt-0">
                <h1 className="text-xs font-semibold mr-3">Display total before taxes</h1>
                <div onClick={toggleSwitch} className={`${switchOn ? "bg-gray-800" : "bg-gray-300"} inline-block w-10 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out`}>
                    <span className={`${switchOn ? "translate-x-full" : ""} block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out`}></span>
                </div>
            </div>

        </div>
        </>
    )
}