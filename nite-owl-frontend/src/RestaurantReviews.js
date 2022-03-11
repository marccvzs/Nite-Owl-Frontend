import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm';

function RestaurantReviews({ id }) {
    const [reviews, setReviews] = useState([])
    const [leaveReview, setLeaveReview] = useState(false);
    
    useEffect(() => {
        fetch(`http://localhost:9292/restaurant/${id}/reviews`)
        .then(r => r.json())
        .then(reviewsArray => setReviews(reviewsArray))
    }, [id])
    console.log(reviews)
    const reviewsList = reviews.map(r => {

        return (
            <div key={r.id}>
                <h3>{r.user.name} Says:</h3>
                <p>{r.review}</p>
                <p>{r.stars}</p>
            </div>
        )
    })

    function handleLeaveReview() {
        setLeaveReview(leaveReview => !leaveReview)
    }

    function handleSubmit(newReview) {
        console.log(newReview)
        setReviews(reviews => [...reviews, newReview])
    }

  return (
    <div>
        <button onClick={() => handleLeaveReview()}>{leaveReview ? 'Exit' : 'Leave a' } Review</button>
        <div>{leaveReview ? <ReviewForm id={id} onUpdate={handleSubmit}/> : null}</div>
        {reviewsList}
    </div>
  )
}

export default RestaurantReviews