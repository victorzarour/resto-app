import {NavLink} from 'react-router-dom'

function RestaurantListItem({ restaurant }) {

    const {id, name, image, address} = restaurant
    
    return(
          <div className='gallery'>
            <img src={image} className="albumimage"/>
            <div className='desc'>
              <h4>{name}</h4>
              <p>{address}</p>
              <NavLink to={`/restaurants/${id}`}>
                <button>More</button>
              </NavLink>
            </div>
          </div>
    );
}

export default RestaurantListItem;