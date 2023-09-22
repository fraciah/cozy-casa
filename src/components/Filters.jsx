import { useState } from "react"
import { Card } from "./Card"
import { LiaFilterSolid } from "react-icons/lia"
export function Filters(){
    const [term, setTerm] = useState("");
    const [switchOn, setSwitchOn] = useState(false);

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
                switch here
            </div>
        </div>
        <Card term={term}
            setTerm={setTerm}/>
        </>
    )
}