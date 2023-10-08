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
import { LiaGolfBallSolid } from "react-icons/lia"
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";


export function Filters(){
    
    const [switchOn, setSwitchOn] = useState(false);

    const toggleSwitch = () => setSwitchOn(!switchOn);

    const icons = [
        { icon: <HiOutlineHomeModern/>, text: "Tiny homes" },
        { icon: <BsFire/>, text: "Trending" },
        { icon: <MdDesk/>, text: "Rooms" },
        { icon: <TbHomeStar/>, text: "Design" },
        { icon: <TbBeach/>, text: "Beachfront" },
        { icon: <BiLandscape/>, text: "Amazing views" },
        { icon: <LuSailboat/>, text: "Boats" },
        { icon: <LiaSwimmingPoolSolid/>, text: "Amazing pools" },
        { icon: <LiaGolfBallSolid/>, text: "Golfing" }
    ];

    return(
        <>
        <div className="px-5 sm:px-10 flex items-center pt-1 sm:pt-3 flex-wrap pb-2">
            <>
            {/* <MdChevronLeft className="cursor-pointer" size={20}/> */}
            <div id="slider" className="flex gap-7 sm:gap-4 py-1 mr-1 pt-2 text-gray-500 pb-0 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                {icons.map((icon, index) => {
                    let className = "flex flex-col items-center w-16 sm:w-20 pb-3 hover:text-gray-800 hover:border-b-0 sm:hover:border-b-2 cursor-pointer";
                    if (index === 0) {
                        className = "flex flex-col items-center w-16 sm:w-20 pb-3 border-b-0 sm:border-b-2 border-gray-800 text-gray-800";
                    }
                    return (
                        <div key={index} className={className}>
                            <span className="text-xl sm:text-3xl">{icon.icon}</span>
                            <h1 className="text-xs">{icon.text}</h1>
                        </div>
                    );
                })}
            </div>
            {/* <MdChevronRight className="cursor-pointer" size={20}/> */}
            </>

            <div className="flex border py-2 sm:py-4 px-2 sm:px-5 rounded-xl items-center cursor-pointer mx-2 sm:mx-5 mt-0 sm:mt-5 md:mt-0 mb-2 sm:mb-0">
                <LiaFilterSolid className="mr-1"/>
                <h1 className="text-xs font-semibold">Filters</h1>
            </div>

            <div className="flex border py-2 sm:py-3 px-2 sm:px-4 rounded-xl items-center cursor-pointer mt-0 sm:mt-5 md:mt-0 mb-2 sm:mb-0">
                <h1 className="text-xs font-semibold mr-3">Display total before taxes</h1>
                <div onClick={toggleSwitch} className={`${switchOn ? "bg-gray-800" : "bg-gray-300"} inline-block w-8 sm:w-10 h-5 sm:h-6 rounded-full p-1 transition-colors duration-300 ease-in-out`}>
                    <span className={`${switchOn ? "translate-x-full" : ""} block w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out`}></span>
                </div>
            </div>

        </div>
        </>
    )
}