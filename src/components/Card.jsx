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
        <div>
            {data.map((item) => {
                return(
                    <div key={item.id}>
                        <img src={item.webformatURL} alt={item.tags} />
                        <h6>{item.likes}</h6>
                        <h5>{item.views}</h5>
                        <h4>{item.comments}</h4>
                        <h3>{item.downloads}</h3>
                        <p>{item.tags}</p>
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