import PropTypes from 'prop-types';

import { useState, useEffect } from "react"
export function Card({ term }){
    const [data, setData] = useState([])

    useEffect(() =>{
        const apiKey = import.meta.env.VITE_API_KEY;
        fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`)
          .then((response) => response.json())
          .then((data) => {
            console.log("Data",data.hits)
            setData(data.hits)
          })
      }, [term])
    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 mt-3">
            {data.map((item) => {
                return(
                    <div key={item.id} className="rounded-lg cursor-pointer">
                        <img src={item.webformatURL} alt={item.tags} className="w-full h-72 object-cover mb-2 rounded-xl" />
                        <h2 className="text-base mb-2 font-semibold text-gray-900">Courtesy of {item.user}</h2>
                        <div className="grid grid-cols-2 mb-5 gap-2">
                            <h6><span className="font-medium">Likes:</span> {item.likes}</h6>
                            <h5><span className="font-medium">Views:</span> {item.views}</h5>
                            <h4><span className="font-medium">Comments: </span>{item.comments}</h4>
                            <h3><span className="font-medium">Downloads: </span>{item.downloads}</h3>
                        </div>
                    </div>
                )
            })
            }
        </div>
        <div className="mt-10 flex flex-col items-center justify-center">
            <p className="font-semibold text-lg mb-3">Continue exploring iconic city homes</p>
            <button className="bg-zinc-800 hover:bg-zinc-900 font-semibold text-white py-3 px-5 rounded-md">Show more</button>
        </div>
        </>
    )
}
Card.propTypes = {
    term: PropTypes.string.isRequired,
};