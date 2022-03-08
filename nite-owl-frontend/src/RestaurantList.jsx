import React from "react";
import RestaurantItem from "./RestaurantItem";

function RestaurantList({ restaurantArray }) {
  const restaurants = restaurantArray.map((rest) => {
    return <RestaurantItem key={rest.id} rest={rest} />;
  });
  
  return <div>{restaurants}</div>;
}

export default RestaurantList;
