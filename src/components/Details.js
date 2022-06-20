import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import StarRating from "./StarRating";

function Details () {

    const [restaurant, setRestaurant] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)

    const [newReview, setNewReview] = useState({
      title: "",
      reviewer: "",
      review: "",
    });   

    const { id } = useParams();

    useEffect(() => {
      fetch(`http://localhost:3000/restaurants/${id}`)
        .then((r) => r.json())
        .then((restaurant) => {
          setRestaurant(restaurant);
          setIsLoaded(true)
        });
    }, [id]);
  
    if (!isLoaded) return <h2>Loading...</h2>
  
    const { image, name, address, review, rating, additionalReviews } = restaurant;

    function handleChange(e){
      const { name, value } = e.target;
      setNewReview({ ...newReview, [name]: value });
  };

  const addedReviews = [...additionalReviews, newReview]
  
  function handleSubmit(e){
    e.preventDefault();
    
    fetch(`http://localhost:3000/restaurants/${id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({
          additionalReviews: addedReviews
        }),
    })
    .then((r) => r.json())
    .then((restaurant) => {setRestaurant(restaurant)})
    
    setNewReview({
      title: "",
      reviewer: "",
      review: "",
    })
  }
  
    return (
      <section>
            <img src={image}/>
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{review}</p>
            <p>Rating = {rating}</p>

            <form onSubmit={handleSubmit}>

              <label htmlFor="title">Title</label>
              <input type="text" id="title" placeholder="Title..." name="title" value={newReview.title} onChange={handleChange}/>

              <label htmlFor="reviewer">Reviewer</label>
              <input type="text" id="name" placeholder="Reviewer..." name="reviewer" value={newReview.reviewer} onChange={handleChange}/>

              <label htmlFor="review">Review!</label>
              <textarea id="review" name="review" placeholder="Write something.." value={newReview.review} onChange={handleChange} style={{height:200}}></textarea>
              
              <StarRating />

              <button type="submit">Submit</button>
            </form>

            {additionalReviews.map(piece => {
              return (
                <div key={piece.review}>
                  <h4>{piece.title}</h4>
                  <p>By: {piece.reviewer}</p>
                  <p>{piece.review}</p>
                </div>
              )
            })}

      </section>
    );
  };

export default Details;