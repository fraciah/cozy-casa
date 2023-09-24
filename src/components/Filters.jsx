import { useState } from "react"
import { LiaFilterSolid } from "react-icons/lia"
import { HiOutlineHomeModern } from "react-icons/hi2"
import { BsFire } from "react-icons/bs"
import { BiLandscape } from "react-icons/bi"
import { TbHomeStar } from "react-icons/tb"
import { TbBeach } from "react-icons/tb"
import { MdDesk } from "react-icons/md"
import { MdOutlineFreeBreakfast } from "react-icons/md"
import { LiaSwimmingPoolSolid } from "react-icons/lia"
import { GiIceland } from "react-icons/gi"

export function Filters(){
    
    const [switchOn, setSwitchOn] = useState(false);

    const toggleSwitch = () => setSwitchOn(!switchOn);

    return(
        <>
        <div className="px-10 flex items-center pt-6 pb-4">
            
            <div className="flex gap-5 py-1 mr-5 text-gray-500">
                <div className="flex flex-col items-center w-20 hover:text-gray-950 cursor-pointer">
                    <HiOutlineHomeModern className="text-3xl"/>
                    <h1 className="text-xs">Tiny homes</h1>
                </div>
                <div className="flex flex-col items-center w-20 hover:text-gray-950 cursor-pointer">
                    <BsFire className="text-3xl"/>
                    <h1 className="text-xs">Trending</h1>
                </div>
                <div className="flex flex-col items-center w-20 hover:text-gray-950 cursor-pointer">
                    <MdDesk className="text-3xl"/>
                    <h1 className="text-xs">Rooms</h1>
                </div>
                <div className="flex flex-col items-center w-20 hover:text-gray-950 cursor-pointer">
                    <TbHomeStar className="text-3xl"/>
                    <h1 className="text-xs">Design</h1>
                </div>
                <div className="flex flex-col items-center w-20 hover:text-gray-950 cursor-pointer">
                    <TbBeach className="text-3xl"/>
                    <h1 className="text-xs">Beachfront</h1>
                </div>
                <div className="flex flex-col items-center w-20 hover:text-gray-950 cursor-pointer">
                    <BiLandscape className="text-3xl"/>
                    <h1 className="text-xs">Amazing views</h1>
                </div>
                <div className="flex flex-col items-center w-20 hover:text-gray-950 cursor-pointer">
                    <MdOutlineFreeBreakfast className="text-3xl"/>
                    <h1 className="text-xs text-center">Bed & breakfasts</h1>
                </div>
                <div className="flex flex-col items-center w-20 hover:text-gray-950 cursor-pointer">
                    <GiIceland className="text-3xl"/>
                    <h1 className="text-xs">Countryside</h1>
                </div>
                <div className="flex flex-col items-center w-20 hover:text-gray-950 cursor-pointer">
                    <LiaSwimmingPoolSolid className="text-3xl"/>
                    <h1 className="text-xs">Amazing pools</h1>
                </div>
            </div>

            <div className="flex border py-4 px-5 rounded-xl items-center cursor-pointer mx-5">
                <LiaFilterSolid className="mr-1"/>
                <h1 className="text-xs font-semibold">Filters</h1>
            </div>

            <div className="flex border py-3 px-4 rounded-xl items-center cursor-pointer">
                <h1 className="text-xs font-semibold mr-3">Display total before taxes</h1>
                <div onClick={toggleSwitch} className={`${switchOn ? "bg-gray-800" : "bg-gray-300"} inline-block w-10 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out`}>
                    <span className={`${switchOn ? "translate-x-full" : ""} block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out`}></span>
                </div>
            </div>

        </div>
        </>
    )
}