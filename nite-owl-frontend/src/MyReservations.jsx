import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MyReservations() {
  const [reservations, setReservations] = useState([])
  const { id } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:9292/user/${id}/reservations`)
  //   .then(r => r.json())
  //   .then(data => console.log(data))
  // }, [])

  return (
    <div></div>
  )
}

export default MyReservations