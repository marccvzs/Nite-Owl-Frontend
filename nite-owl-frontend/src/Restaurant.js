import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import RestaurantReviews from "./RestaurantReviews";

function Restaurant() {
  const [restaurant, setRestaurant] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/restaurant/${id}`)
      .then((r) => r.json())
      .then((r) => setRestaurant(r));
  }, [id]);

  return (
    <div className="restPageContent">
      <img src={restaurant.restaurant_image} alt={restaurant.restaurant_name} />
      <div className="restInfo">
        <h2 className="restName">{restaurant.restaurant_name}</h2>
        <p className="description">{restaurant.description}</p>
        <p>{restaurant.address}</p>
        <p>{restaurant.price}</p>
        <Link to={`/restaurant/${restaurant}/schedule`}>
          <button>Make a Reservation</button>
        </Link>
        <button>Leave a Review</button>
      </div>
      <div>
        <h3>Reviews</h3>

        <RestaurantReviews id={id} />
      </div>
    </div>
  );
}

export default Restaurant;
