import { TbWorld } from "react-icons/tb"
import { FaFacebookSquare } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"

export function Footer(){
    return(
        <div className="container mx-auto px-1">
            <div className="flex justify-between border-t py-5 mt-1">

                <div className="flex gap-2 text-base text-gray-700">
                    <h6>&copy; 2023 Airbnb, Inc.</h6>
                    <span>·</span>
                    <h5 className="hover:underline cursor-pointer">Terms </h5>
                    <span>·</span>
                    <h5 className="hover:underline cursor-pointer">Sitemap</h5>
                    <span>·</span>
                    <h5 className="hover:underline cursor-pointer">Privacy</h5>
                    <span>·</span>
                    <h5 className="hover:underline cursor-pointer">Your Privacy Choices</h5>
                </div>

                <div className="flex items-center gap-5 cursor-pointer text-gray-950">
                    <div className="flex items-center gap-1">
                        <TbWorld/>
                        <h5 className="hover:underline cursor-pointer">English (US)</h5>
                    </div>
                    <div className="flex gap-1">
                        <h5>$</h5>
                        <h5 className="hover:underline cursor-pointer">USD</h5>
                    </div>
                    <div className="flex gap-2 text-xl">
                        <FaFacebookSquare/>
                        <FaSquareXTwitter/>
                        <FaSquareInstagram/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}