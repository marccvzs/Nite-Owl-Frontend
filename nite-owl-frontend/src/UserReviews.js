import React, { useState, useEffect } from 'react'
import ReviewItem from './ReviewItem';

function UserReviews({ id }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9292/user/${id}/reviews`)
        .then(r => r.json())
        .then(reviewsArray => setReviews(reviewsArray))
    }, [])
   
    const reviewsList = reviews.map(review => {
        return (
            <ReviewItem key={review.id} reviewObj={review}/>
        )
    })

  return (
    <div>{reviewsList}</div>
  )
}

export default UserReviews