import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import RestaurantPage from './components/RestaurantPage';
import RestaurantForm from './components/RestaurantForm';
import Details from "./components/Details";
import RestoOfTheWeek from './components/RestoOfTheWeek';

function App() {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch ("http://localhost:3000/restaurants")
    .then (res => res.json())
    .then (restaurants => setRestaurants(restaurants))
  }, [])

  function onAddRestaurant(newRestaurant){
    return setRestaurants([...restaurants, newRestaurant]);
  };

  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/restaurants">
          <RestaurantPage restaurants={restaurants}/>
        </Route>
        <Route exact path="/restaurants/new">
          <RestaurantForm onAddRestaurant={onAddRestaurant}/>
        </Route>
        <Route path="/restaurants/:id">
          <Details />
        </Route>
        <Route path="/weeksresto">
          <RestoOfTheWeek restaurants={restaurants}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
