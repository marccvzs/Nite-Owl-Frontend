import React, { useState, useEffect} from "react";
import {useParams } from 'react-router-dom'
import Calendar from "react-calendar";
import Clock from 'react-clock'

function ScheduleForm() {
  const {restaurant}=useParams()
  const [date, setDate] = useState(new Date())
  const [formData, setFormData]=useState({

  })



  console.log(restaurant.id)

  return (
    <div>
      <form>
        <p></p>
        <label for="guests">Number of Guests</label>
        <input type="number" step="1"></input>
        <p>{date.toString()}</p>
        <Calendar onChange={setDate} value={formData.date} />
      </form>
    </div>
  );
}

export default ScheduleForm;
