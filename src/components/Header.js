import React from "react";
import {NavLink} from 'react-router-dom'

function Header() {
    return(
      <header className="headerbackground">
        <nav>
          <div className="navbar">
            <NavLink exact className="button" to="/">
              Home
            </NavLink>
            <NavLink exact className="button" to="/restaurants">
              Restaurants
            </NavLink>
            <NavLink exact className="button" to="/restaurants/new">
              Add Restaurant
            </NavLink>
            <NavLink exact className="button" to="/weeksresto">
              Restò of the Week
            </NavLink>
          </div>
        </nav>
      </header>
    );
  }

export default Header;