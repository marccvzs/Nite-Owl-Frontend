import React from "react";
import RestaurantItem from "./RestaurantItem";

function RestaurantList({ restaurantArray }) {
  const restaurants = restaurantArray.map((rest) => {
    return <RestaurantItem key={rest.id} rest={rest} />;
  });
  
  return<>
  <h2>Find Your New Favorite Spot</h2>
   <div className="restaurantListContainer">{restaurants}</div>;
   </>
}

export default RestaurantList;
