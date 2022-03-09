import React from "react";

function RestaurantItem({ rest }) {
  const { restaurant_name, address, price, restaurant_image, cuisine } = rest;
  return (
    <div className="listItem">
      <img className="listImage" src={restaurant_image}></img>
      <div className="blurb">
        <p style={{ fontSize: "36px" }}>{restaurant_name}</p>
        <br></br>
        <p style={{ fontSize: "24px" }}>{cuisine}</p>
        <br></br>
        <p>{address}</p>
        <br></br>
        <p style={{ fontSize: "20px" }}>{price}</p>
      </div>
    </div>
  );
}

export default RestaurantItem;
