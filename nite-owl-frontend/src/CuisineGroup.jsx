import React from 'react'

function CuisineGroup({r}) {
    
    const {restaurant_name, address, price, cuisine, description, restaurant_image}=r

  return (
    <div>
        <div>{restaurant_name}</div>
        <div>{address}</div>
        <div>{price}</div>
        <div>{cuisine}</div>
        <div>{description}</div>
        <img src={restaurant_image}/>
    </div>
  )
}

export default CuisineGroup