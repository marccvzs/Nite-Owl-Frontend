import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

function ScheduleForm({ restaurant }) {
  const [details, setDetails] = useState(new Date());
  const [rides, setRides] = useState([]);
  const [formData, setFormData] = useState({
    details: details,
    restaurant_id: restaurant.id,
    rideshare_id: '',
    user_id: 19,
    num_guests: '',
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
      .then((r) => r.json())
      .then((data) => console.log(data));
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="guests">Number of Guests</label>
      
        <select onChange={handleFormChange}
          value="formData.num_guests" name="num_guests" onChange={handleFormChange}>
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
        <label>Transportation</label>
        <br></br>
        <select name="rideshare_id" onChange={handleFormChange}>
          <option value="null">Find a Ride</option>
          {rideOptions}
        </select>
        <p>{details.toString()}</p>
        <Calendar onChange={setDetails} value={formData.details}/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ScheduleForm;
