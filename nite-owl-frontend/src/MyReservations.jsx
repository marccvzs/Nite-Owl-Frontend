import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReservationItem from './ReservationItem';

function MyReservations() {
  const [reservations, setReservations] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/user/${id}/reservations`)
    .then(r => r.json())
    .then(reservationsArray => setReservations(reservationsArray))
  }, [])
  
  const reservationsList = reservations.map(res => {
    console.log(res.restaurant)
    return (
      
      <ReservationItem key={res.id} res={res.restaurant} />
    )
  })

  return (
    <div>
      {reservationsList}
    </div>
  )
}

export default MyReservations