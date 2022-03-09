import React from 'react'

function ReservationItem({ details, num_guests, res }) {
    const { restaurant_name, address, price } = res;
    console.log(details, num_guests)
  return (
    <div>
        <h3>{restaurant_name}</h3>
        <p>{address}</p>
        <span>{price}</span>
        <br/>
        <span>Guests: {num_guests}</span>
        <br/>
        <span>{details}</span>
    </div>
  )
}

export default ReservationItem