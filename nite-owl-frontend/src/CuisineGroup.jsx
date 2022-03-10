import React from "react";

function CuisineGroup({ r }) {
  const {
    restaurant_name,
    address,
    price,
    cuisine,
    description,
    restaurant_image,
  } = r;

  return (
    <div className="cuisineItem">
      <img className="cuisineImage" src={restaurant_image} />
      <div className="cuisineBlurb">
        <div style={{ fontSize: "60px" }}>{restaurant_name}</div>
        <div style={{ fontSize: "18px" }}>{address}</div>
        <div style={{ fontSize: "18px" }}>{price}</div>
        <div style={{ fontSize: "20px" }}>{description}</div>
      </div>
    </div>
  );
}

export default CuisineGroup;
