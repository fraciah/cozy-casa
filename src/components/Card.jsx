import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

export function Card(){
    const [data, setData] = useState([]);
    const term = "bungalow";  //property

    useEffect(() =>{
        const apiKey = import.meta.env.VITE_API_KEY;
        fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`)
          .then((response) => response.json())
          .then((data) => {
            console.log("Data",data.hits)
            setData(data.hits)
          })
            .catch((error) => {
                console.log(error);
            });
      }, [])
    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 sm:px-10 mt-3">
            {data.map((item) => {
                return(
                    <div key={item.id} className="rounded-lg cursor-pointer">
                        <img src={item.webformatURL} alt={item.tags} className="w-full h-64 sm:h-72 object-cover mb-2 rounded-xl" />
                        <div className="flex justify-between">
                            <h2 className="text-base mb-1 font-semibold text-gray-900">Courtesy of {item.user}</h2>
                            <h6 className="flex items-center"><AiFillStar className="mr-1"/>{item.likes}</h6>
                        </div>
                        <div className="mb-5">
                            <h5 className="text-gray-500 text-sm sm:text-base">{item.views} views</h5>
                            <h4 className="text-gray-500 text-sm sm:text-base">{item.comments} comments</h4>
                            <h3 className="text-gray-900 flex flex-wrap mt-1">
                                {item.tags.split(', ').map((tag, index) => (
                                    <span key={index} className="bg-rose-100 mr-1 mb-1 text-xs sm:text-sm rounded-md p-1">
                                    #{tag}
                                    </span>
                                ))}
                            </h3>
                        </div>
                    </div>
                )
            })
            }
        </div>
        <div className="mt-8 sm:mt-10 flex flex-col items-center">
            <p className="font-semibold text-base sm:text-lg mb-3 text-center">Continue exploring iconic city homes</p>
            <button className="bg-zinc-800 hover:bg-zinc-900 text-base sm:text-lg font-semibold text-white py-2 sm:py-3 px-3 sm:px-5 rounded-md">Show more</button>
        </div>
        </>
    )
}