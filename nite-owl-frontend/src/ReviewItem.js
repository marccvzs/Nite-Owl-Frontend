import React from 'react'

function ReviewItem({ reviewObj }) {
    const { review, restaurant, stars } = reviewObj;
    console.log(restaurant)
  return (
    <div>
        <h3>{restaurant.restaurant_name}</h3>
        <p>{review}</p>
        <p>{stars}</p>
    </div>
  )
}

export default ReviewItem