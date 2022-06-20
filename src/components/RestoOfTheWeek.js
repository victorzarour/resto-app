
import RestaurantListItem from "./RestaurantListItem";

function RestoOfTheWeek({ restaurants }) {

    const randomNumber = Math.floor(Math.random() * restaurants.length);
    const weeksresto = restaurants[randomNumber] 

    return (
        <div>
            <RestaurantListItem key={weeksresto.id} restaurant={weeksresto}/>
        </div>
    );
}

export default RestoOfTheWeek
