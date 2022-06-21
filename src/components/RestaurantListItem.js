import {NavLink} from 'react-router-dom'

function RestaurantListItem({ restaurant }) {

    const {id, name, image, address, rating} = restaurant
    
    return(
          <div>
            <img src={image} className="albumimage"/>
            <h4>{name}</h4>
            <p>Address: {address}</p>
            <p>Rating: {rating}</p>
            <NavLink classNameName="button"className="btn btn-sm btn-outline-secondary" to={`/restaurants/${id}`}>
              ReadMore
            </NavLink>
          </div>
    );
}

export default RestaurantListItem;