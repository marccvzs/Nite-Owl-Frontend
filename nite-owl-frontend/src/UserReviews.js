import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ReviewItem from './ReviewItem';

function UserReviews() {
    const [reviews, setReviews] = useState([])
    const { id } = useParams();

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