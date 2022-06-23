
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
                <div className="banner">
                    <h1>RESTÒ</h1>
                    <p>Explore the options below. Begin your culinary adventure.</p>
                    <form>
                        <input type="text" placeholder="Search.." name="search" value={search} onChange={handleChange}/>
                    </form>
                </div>
            </section>

            <RestaurantList restaurants={restaurants} search={search}/>
        </div>
    );
}

export default RestaurantPage;