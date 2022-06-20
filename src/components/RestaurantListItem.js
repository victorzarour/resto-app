import {NavLink} from 'react-router-dom'

function RestaurantListItem({ restaurant }) {

    const {id, name, image, address} = restaurant
    
    return(
          <div>
            <img src={image}/>
            <h4>{name}</h4>
            <p>{address}</p>
            <NavLink classNameName="button"className="btn btn-sm btn-outline-secondary" to={`/restaurants/${id}`}>
              ReadMore
            </NavLink>
          </div>
    );
}

export default RestaurantListItem;