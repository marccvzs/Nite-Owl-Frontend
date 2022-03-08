import React from 'react'

function RestaurantItem({rest}) {
    const {restaurant_name, address, price} = rest
  return (
    <div className="bg-blue-700 text-white">{restaurant_name} {address} {price}</div>
  )
}

export default RestaurantItem