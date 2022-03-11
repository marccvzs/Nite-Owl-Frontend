import React from "react";
import {Link} from 'react-router-dom'

function CuisineGroup({ r }) {
  const {
    id,
    restaurant_name,
    address,
    price,
    cuisine,
    description,
    restaurant_image,
  } = r;

  console.log(r)

  return (
    <div className="cuisineItem">
      <h2>{cuisine}</h2>
      <Link to={{pathname: `/restaurant/${id}`}}><img className="cuisineImage" src={restaurant_image} /></Link>
      <div className="cuisineBlurb">
        <div style={{ fontSize: "55px" }}>{restaurant_name}</div>
        <div style={{ fontSize: "18px" }}>{address}</div>
        <div style={{ fontSize: "18px" }}>{price}</div>
        <div style={{ fontSize: "20px" }}>{description}</div>
      </div>
    </div>
  );
}

export default CuisineGroup;
