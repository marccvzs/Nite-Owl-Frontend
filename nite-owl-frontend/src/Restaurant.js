import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantReviews from './RestaurantReviews';
import ReviewForm from './ReviewForm';

function Restaurant() {
  const [restaurant, setRestaurant] = useState({});
  const [leaveReview, setLeaveReview] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/restaurant/${id}`)
      .then((r) => r.json())
      .then((r) => setRestaurant(r));
  }, [id]);

  function handleLeaveReview() {
    setLeaveReview(leaveReview => !leaveReview)
  }

  return (
    <div className="restPageContent">
      <img src={restaurant.restaurant_image} alt={restaurant.restaurant_name} />
      <div className="restInfo">
        <h2 className="restName">{restaurant.restaurant_name}</h2>
        <p className="description">{restaurant.description}</p>
        <p>{restaurant.address}</p>
        <p>{restaurant.price}</p>
        <button>Make a Reservation</button>
        <button onClick={() => handleLeaveReview()}>{leaveReview ? 'Leave a' : 'Exit'} Review</button>
        <div>{leaveReview ? null : <ReviewForm id={id}/>}</div>
      </div>
      <div>
      <h3>Reviews</h3>
      
      <RestaurantReviews id={id} />
      </div>
    </div>
  );
}

export default Restaurant;
