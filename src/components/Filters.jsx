import { useState } from "react"
import { Card } from "./Card"
import { LiaFilterSolid } from "react-icons/lia"
export function Filters(){
    const [term, setTerm] = useState("");
    const [switchOn, setSwitchOn] = useState(true);

    const toggleSwitch = () => setSwitchOn(!switchOn);

    return(
        <>
        <div className="py-4 px-10 flex items-center justify-between">
            <div className="text-sm">
                <h1>Tiny home</h1>
            </div>

            <div className="flex border py-3 px-4 rounded-xl items-center text-sm cursor-pointer">
                <LiaFilterSolid/>
                <h1>Filters</h1>
            </div>

            <div className="flex border py-3 px-4 rounded-xl items-center cursor-pointer">
                <h1 className="text-sm">Display total before taxes</h1>
                <div onClick={toggleSwitch} className={`${switchOn ? "bg-gray-800" : "bg-gray-300"} inline-block w-10 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out`}>
                    <span className={`${switchOn ? "translate-x-full" : ""} block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out`}></span>
                </div>
            </div>
        </div>
        <Card term={term}
            setTerm={setTerm}/>
        </>
    )
}