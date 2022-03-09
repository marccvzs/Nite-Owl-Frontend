import React, { useState, useEffect} from "react";
import RestaurantItem from "./RestaurantItem";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/restaurants')
    .then(r => r.json())
    .then(restaurantsArray => setRestaurants(restaurantsArray))
  })
  console.log(restaurants)
  
  const restaurantsList = restaurants.map(restaurant => {
    return (
      <RestaurantItem key={restaurant.id} rest={restaurant}/>
    )
  })

  return(
  <>
    <h2>Find Your New Favorite Spot</h2>
    <div className="restaurantListContainer">{restaurantsList}</div>;
   </>)
}

export default RestaurantList;
