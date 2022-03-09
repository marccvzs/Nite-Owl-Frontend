import React from 'react'

function ReservationItem({ res }) {
    const { restaurant_name, address, price } = res;
    
  return (
    <div>
        <h3>{restaurant_name}</h3>
        <p>{address}</p>
        <span>{price}</span>
    </div>
  )
}

export default ReservationItem