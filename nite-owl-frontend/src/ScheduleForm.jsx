import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";

function ScheduleForm({ restaurant }) {
  const [details, setDetails] = useState(new Date());
  const [submitted, setSubmitted] = useState(false);
  const [rides, setRides] = useState([]);
  const [formData, setFormData] = useState({
    details: details,
    restaurant_id: restaurant.id,
    rideshare_id: "",
    user_id: 19,
    num_guests: "",
  });

  useEffect(() => {
    fetch("http://localhost:9292/rideshares")
      .then((r) => r.json())
      .then((data) => setRides(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        details: formData.details,
        restaurant_id: formData.restaurant_id,
        rideshare_id: formData.rideshare_id,
        user_id: formData.user_id,
        num_guests: formData.num_guests,
      }),
    })
      .then((r) => {
        setSubmitted(true);
        return r.json();
      })
      .then((data) => console.log(data));
  }

  if (submitted) {
    return (
      <Redirect
        push
        to={{
          pathname: `/user/${formData.user_id}/reservations`,
        }}
      />
    );
  }

  function handleFormChange(e) {
    const objKey = e.target.name;
    const objVal = e.target.value;

    setFormData({ ...formData, [objKey]: objVal });
  }

  const rideOptions = rides.map((r) => {
    return <option value={r.id}>{r.company}</option>;
  });
 
  



  return (
    <div className="submitForm">
      <p style={{fontSize:"26px"}}>For {formData.num_guests? formData.num_guests: null} on {details.toString().slice(0, 15)}</p>
      <form className="submitForm" onSubmit={handleSubmit}>
        <div className="menus">
          <label htmlFor="guests">Number of Guests</label>

          <select
            onChange={handleFormChange}
            value="formData.num_guests"
            name="num_guests"
            onChange={handleFormChange}
          >
            <option value="null"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <br></br>
        </div>
        <div className="menus">
          <label>Transportation</label>
          <br></br>
          <select name="rideshare_id" onChange={handleFormChange}>
            <option value="null">Find a Ride</option>
            {rideOptions}
          </select>
        </div>
      <div className="calendar">
        <Calendar onChange={setDetails} value={formData.details} />
      </div>

        <button type="submit">submit</button>
      </form>
      {/* <div className="clock">
          <TimePicker hourPlaceholder="07" minutePlaceholder="30"/>
        </div> */}
    </div>
  );
}

export default ScheduleForm;
