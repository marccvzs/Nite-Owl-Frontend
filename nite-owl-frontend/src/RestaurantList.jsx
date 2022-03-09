import React, { useState, useEffect} from "react";
import RestaurantItem from "./RestaurantItem";

function RestaurantList( { search }) {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/restaurants')
    .then(r => r.json())
    .then(restaurantsArray => setRestaurants(restaurantsArray))
  }, [])
  
  const restaurantsList = restaurants.filter(restaurant => {
    return (
      restaurant.restaurant_name.toLowerCase().includes(search.toLowerCase())
    )
  })

  return(
  <>
    <div className="restaurantListContainer">
      <RestaurantItem list={restaurantsList}/>
    </div>;
   </>)
}

export default RestaurantList;
