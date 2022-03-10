import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

function ScheduleForm({ restaurant }) {
  const [details, setDetails] = useState(new Date());
  const [rides, setRides]=useState([])
  const [formData, setFormData] = useState({
    details: "",
    restaurant_id: restaurant.name,
    rideshare_id: "",
    user_id: 161,
    num_guests: "",
  });

  useEffect(()=>{
    fetch('https://localhost:9292/rideshares')
    .then(r=>r.json)
    .then(data=>setRides(data))
  })
  console.log(rides)

  function handleSubmit() {}
  function handleFormChange(e) {
    console.log(e.target.value);
    console.log(e.target.name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="guests">Number of Guests</label>
        <input
          onChange={handleFormChange}
          name="num_guests"
          value="formData.num_guests"
          type="number"
          step="1"
        ></input>
        <label>Transportation</label><br></br>
        <select name="ride_share_id" onChange={handleFormChange}>
          <option value="null">Find a Ride</option>
          <option value="Lyft">Lyft</option>
          <option value="Uber">Uber</option>
          <option value="Car Service">Car Service</option>
        </select>
        <p>{details.toString()}</p>
        <Calendar onChange={setDetails} value={formData.details} />
      </form>
    </div>
  );
}

export default ScheduleForm;
