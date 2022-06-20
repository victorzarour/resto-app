
import RestaurantList from "./RestaurantList";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function RestaurantPage({ restaurants }) {

    const [search, setSearch] = useState("")

    function handleChange(e){
        setSearch(e.target.value)
    }

    return(
        <div>
            <section>
                <div>
                    <h1>EatNYC</h1>
                    <p>Overwhelmed by the number of restaurants NYC has to offer? You've come to the right place. Explore the options below, or click on the button to add your own entry.</p>
                </div>
                <NavLink exact classNameName="button" className="btn btn-primary my-2" to="/restaurants/new">
                    Add Restaurant
                </NavLink>
            </section>
            <form>
                <input type="text" placeholder="Search.." name="search" value={search} onChange={handleChange}/>
            </form>
            <RestaurantList restaurants={restaurants} search={search}/>
        </div>
    );
}

export default RestaurantPage;