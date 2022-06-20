import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function Details () {

    const [project, setProject] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
  
    const { id } = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:3000/restaurants/${id}`)
        .then((r) => r.json())
        .then((restaurant) => {
          setProject(restaurant);
          setIsLoaded(true)
        });
    }, [id]);
  
    if (!isLoaded) return <h2>Loading...</h2>
  
    const { image, name, address, review, stars } = project;
  
    return (
      <section>
            <img src={image}/>
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{review}</p>
            <p>stars = {stars}</p>


      </section>
    );
  };

export default Details;