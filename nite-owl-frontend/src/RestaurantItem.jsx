import React from "react";
import { Link } from "react-router-dom";

function RestaurantItem({ list }) {
  const restaurants = list.map((rest) => {
    return (
      <div className="listItem" key={rest.id}>
        <Link
          to={{
            pathname: `/restaurant/${rest.id}`,
          }}
        >
          <img
            className="listImage"
            src={rest.restaurant_image}
            alt={rest.restaurant_name}
          ></img>
          </Link>
          <div className="blurb">
            <p style={{ fontSize: "36px" }}>{rest.restaurant_name}</p>
            <br></br>
            <p style={{ fontSize: "24px" }}>{rest.cuisine}</p>
            <br></br>
            <p>{rest.address}</p>
            <br></br>
            <p style={{ fontSize: "20px" }}>{rest.price}</p>
          </div>
        
      </div>
    );
  });
  return <>{restaurants}</>;
}

export default RestaurantItem;
