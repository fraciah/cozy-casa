import { TbWorld } from "react-icons/tb"
import { FaFacebookSquare } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"

export function Footer(){
    return(
        <div className="sm:px-10 px-5 bg-gray-100">
            <div className="grid sm:flex justify-between border-t py-3 space-y-1 sm:py-5">
                <div className="grid space-y-1 sm:flex items-center sm:text-center">
                    <a href="https://github.com/fraciah?tab=repositories" className="text-gray-900 font-semibold hover:underline" target="blank">Crafted with 💖 by Fraciah</a>
                <div className="flex gap-1 sm:gap-2 text-sm sm:text-base text-gray-700">
                    <span className="hidden sm:block ml-2">·</span>
                    <h5 className="hover:underline cursor-pointer">Terms </h5>
                    <span>·</span>
                    <h5 className="hover:underline cursor-pointer">Sitemap</h5>
                    <span>·</span>
                    <h5 className="hover:underline cursor-pointer">Privacy</h5>
                    <span>·</span>
                    <h5 className="hover:underline cursor-pointer">Your Privacy Choices</h5>
                </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-5 cursor-pointer text-gray-950">
                    <div className="flex items-center gap-1">
                        <TbWorld/>
                        <h5 className="hover:underline cursor-pointer text-sm sm:text-base">English (US)</h5>
                    </div>
                    <div className="flex gap-0 sm:gap-1 items-center">
                        <h5>$</h5>
                        <h5 className="hover:underline cursor-pointer text-sm sm:text-base">USD</h5>
                    </div>
                    <div className="flex gap-1 sm:gap-2 text-lg sm:text-xl">
                        <FaFacebookSquare/>
                        <FaSquareXTwitter/>
                        <FaSquareInstagram/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}