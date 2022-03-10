import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantReviews from './RestaurantReviews';
import ReviewForm from './ReviewForm';
import ScheduleForm from './ScheduleForm'

function Restaurant() {
  const [restaurant, setRestaurant] = useState({});
  const [leaveReview, setLeaveReview] = useState(false);
  const [makeReservation, setMakeReservation]=useState(false)

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/restaurant/${id}`)
      .then((r) => r.json())
      .then((r) => setRestaurant(r));
  }, [id]);

  function handleLeaveReview() {
    setLeaveReview(leaveReview => !leaveReview)
  }

  function handleMakeReservation(){
    setMakeReservation(makeReservation=>!makeReservation)
  }
  return (
    <div className="restPageContent">
      <img src={restaurant.restaurant_image} alt={restaurant.restaurant_name} />
      <div className="restInfo">
        <h2 className="restName">{restaurant.restaurant_name}</h2>
        <p className="description">{restaurant.description}</p>
        <p>{restaurant.address}</p>
        <p>{restaurant.price}</p>
        <button onClick={() => handleLeaveReview()}>{leaveReview ? 'Exit' : 'Leave a' } Review</button>
        <div>{leaveReview ? <ReviewForm id={id}/> : null}</div>
        <button onClick={handleMakeReservation}>{makeReservation?  'Close Form' : 'Make a Reservation'} </button>
        <div>{makeReservation?  <ScheduleForm restaurant={restaurant}/> : null} </div>
      </div>
      <div>
        <h3>Reviews</h3>

        <RestaurantReviews id={id} />
      </div>
    </div>
  );
}

export default Restaurant;
