import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantReviews from "./RestaurantReviews";
import ScheduleForm from "./ScheduleForm";

function Restaurant() {
  const [restaurant, setRestaurant] = useState({});
  const [makeReservation, setMakeReservation] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/restaurant/${id}`)
      .then((r) => r.json())
      .then((r) => setRestaurant(r));
  }, [id]);

  function handleMakeReservation() {
    setMakeReservation((makeReservation) => !makeReservation);
  }

  return (
    <>
      <div className="restPageContent">
        <img
          src={restaurant.restaurant_image}
          alt={restaurant.restaurant_name}
        />
        <div className="restInfo">
          <div className="restBlurb">
            <h2 className="restName">{restaurant.restaurant_name}</h2>
            <p>{restaurant.address}</p>
            <p>{restaurant.price}</p>
            <p className="description">{restaurant.description}</p>
          </div>
          <button onClick={handleMakeReservation}>
            {makeReservation ? "Close Form" : "Make a Reservation"}{" "}
          </button>
          <input type="checkbox" id="demo" />
          <label
          className="demo"
            for="demo"
            style={{ visibility: makeReservation ? "visible" : "hidden" }}
          >
              <ScheduleForm restaurant={restaurant} />
          </label>
        </div>
      </div>
      <p className="reviewTitle">Reviews for {restaurant.restaurant_name}</p>
      <RestaurantReviews id={id} />
    </>
  );
}

export default Restaurant;
