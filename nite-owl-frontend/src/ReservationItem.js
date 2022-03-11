import React from 'react'

function ReservationItem({ details, num_guests, res }) {
    const { restaurant_name, address} = res;
    
    const date=details.slice(0,10).split('-')
    const month=date[1]
    const day=date[2]
    const year=date[0]
    console.log(date)
  return (
    <div className="reservation">
        <span>&loz; {month}/{day}/{year} &loz;</span>

        <h3>{restaurant_name}</h3>
        <p style={{fontSize:"14px"}}>{address}</p>
        <span style={{fontSize: "18px"}}>{num_guests} guests</span>
        <br/>
    </div>
  )
}

export default ReservationItem