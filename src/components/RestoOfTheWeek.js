import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function RestoOfTheWeek({ restaurants }) {

    const [restaurant, setRestaurant] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)

    const [newReview, setNewReview] = useState({
      title: "",
      reviewer: "",
      review: "",
    });   

    const { id } = useParams();

    useEffect(() => {
      fetch(`http://localhost:3000/restaurants/5`)
        .then((r) => r.json())
        .then((restaurant) => {
          setRestaurant(restaurant);
          setIsLoaded(true)
        });
    }, [id]);
  
    if (!isLoaded) return <h2>Loading...</h2>
  
    const { image, name, address, review, addedBy, additionalReviews } = restaurant;

    function handleChange(e){
      const { name, value } = e.target;
      setNewReview({ ...newReview, [name]: value });
  };

  const addedReviews = [...additionalReviews, newReview]
  
  function handleSubmit(e){
    e.preventDefault();
    
    fetch(`http://localhost:3000/restaurants/5`, {
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

            <div className="detailsimage">
              <img src={image}/>
            </div>
            
            <div className="restodetails">
              <h2>{name}</h2>
              <p>{address}</p>
              <p>Added by {addedBy}: {review}</p>
            </div>

            <table className="additionalReviews">
                  <tr>
                    <th>Title</th>
                    <th>Reviewer</th>
                    <th>Review</th>
                  </tr>
              {additionalReviews.map(piece => {
              return (
                  <tr key={piece.review}>
                    <td>{piece.title}</td>
                    <td>{piece.reviewer}</td>
                    <td>{piece.review}</td>
                  </tr>
               )
            })}
            </table>

            <form onSubmit={handleSubmit} className="addresto">

              <h2>Feel free to add your own review!</h2>

              <div className="formitem"> 
                <input type="text" id="title" placeholder="Title..." name="title" value={newReview.title} onChange={handleChange}/>
              </div>
              
              <div className="formitem"> 
                <input type="text" id="name" placeholder="Reviewer..." name="reviewer" value={newReview.reviewer} onChange={handleChange}/>
              </div>

              <div className="formitem"> 
                <textarea id="review" name="review" placeholder="Write something.." value={newReview.review} onChange={handleChange} style={{height:200}}></textarea>
              </div>
              
              <button type="submit">Submit</button>
            </form>
      </section>
    );
}

export default RestoOfTheWeek
