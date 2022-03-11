import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantReviews from './RestaurantReviews';
import ReviewForm from './ReviewForm';
import ScheduleForm from './ScheduleForm'

function Restaurant() {
  const [restaurant, setRestaurant] = useState({});
  const [makeReservation, setMakeReservation]=useState(false)

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/restaurant/${id}`)
      .then((r) => r.json())
      .then((r) => setRestaurant(r));

    }, [id]);

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
        <button onClick={handleMakeReservation}>{makeReservation?  'Close Form' : 'Make a Reservation'} </button>
        <div>{makeReservation ? <ScheduleForm restaurant={restaurant}/> : null} </div>
        <h3>Reviews</h3>
        <div>
          <RestaurantReviews id={id} /> 
        </div>
      </div>
      <div>
        

        
      </div>
    </div>
  );
}

export default Restaurant;
