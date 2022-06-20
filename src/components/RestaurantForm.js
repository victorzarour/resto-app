import { useState } from "react";
import StarRating from "./StarRating";

function RestaurantForm({ onAddRestaurant }) {
    const [rating, setRating] = useState(0)
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        address: "",
        review: ""
      });

    function handleChange(e){
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:3000/restaurants", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify({ ...formData, rating: rating}),
        })
        .then((resp) => resp.json())
        .then((newRestaurant) => {onAddRestaurant(newRestaurant);
        setFormData({
            name: "",
            image: "",
            address: "",
            review: "",
        });
        });
    };


    function log(value) {
        setRating(value);
    }

    return(
        <section>         
            <form onSubmit={handleSubmit} autoComplete="off">
                <h2>Add a New Restaurant</h2>

                    <label htmlFor="image">Name</label>
                    <input type="text" id="name" placeholder="Name..." name="name" value={formData.name} onChange={handleChange}/>

                    <label htmlFor="image">Image</label>
                    <input type="text" id="image" placeholder="Image..." name="image" value={formData.image} onChange={handleChange}/>

                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="Address..." name="address" value={formData.address} onChange={handleChange}/>

                    <label htmlFor="review">Review</label>
		            <textarea id="review" name="review" placeholder="Write something.." value={formData.review} onChange={handleChange} style={{height:200}}></textarea>

                    <StarRating onChange={log}/>

                <button type="submit">Add Restaurant</button>
                </form>
        </section>
    );
}

export default RestaurantForm;