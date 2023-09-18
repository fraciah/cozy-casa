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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {data.map((item) => {
                return(
                    <div key={item.id} className="border-slate-200 p-4 rounded-lg shadow-lg shadow-slate-500/50 cursor-pointer">
                        <img src={item.webformatURL} alt={item.tags} className="w-full h-56 object-cover mb-2" />
                        <h2 className="text-lg font-semibold mb-2 text-rose-500">Courtesy of {item.user}</h2>
                        <div className="grid grid-cols-2 mb-5 gap-2">
                            <h6><span className="font-medium">Likes:</span> {item.likes}</h6>
                            <h5><span className="font-medium">Views:</span> {item.views}</h5>
                            <h4><span className="font-medium">Comments: </span>{item.comments}</h4>
                            <h3><span className="font-medium">Downloads:</span>{item.downloads}</h3>
                        </div>
                        <p>{item.tags.split(', ').map((tag, index) => (
                                <span key={index} className="rounded p-1 mr-2 bg-slate-200">#{tag} </span>
                            ))}</p>
                    </div>
                )
            })
            }
        </div>
    )
}
Card.propTypes = {
    term: PropTypes.string.isRequired,
};