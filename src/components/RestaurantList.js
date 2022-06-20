import RestaurantListItem from "./RestaurantListItem";

function RestaurantList({ restaurants, search }) {

    const allRestaurants = restaurants
    .filter(restaurant => restaurant.name.toLowerCase().includes(search.toLowerCase()))
    .map(restaurant => {
        return ( 
            <RestaurantListItem key={restaurant.id} restaurant={restaurant}/>
        )
    })

    return(
        <section>
            <div>
                {allRestaurants}
            </div>
        </section>
    );
}

export default RestaurantList;