import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReservationItem from './ReservationItem';
import UserReviews from './UserReviews';

function MyReservations() {
  const [reservations, setReservations] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/user/${id}/reservations`)
    .then(r => r.json())
    .then(reservationsArray => setReservations(reservationsArray))
  }, [])

  console.log(reservations)



  
  const reservationsList = reservations.map(res => {
    return (
      
      <ReservationItem 
      key={res.id} 
      details={res.details}
      num_guests={res.num_guests}
      res={res.restaurant} 
      />
 
    )
  })
  
  return (
    <div id="reservations">
      {reservationsList}
      <UserReviews id={id}/>
    </div>
  )
}

export default MyReservations