import React from 'react'

function ReviewItem({ reviewObj }) {
    const { review, restaurant, stars } = reviewObj;
    
  return (
    <div className="review">
        <h3>{restaurant.restaurant_name}</h3>
        <p>{stars}</p>
        <p>{review}</p>
    </div>
  )
}

export default ReviewItem