import React, { useState, useEffect } from 'react'

function RestaurantReviews({ id }) {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/restaurant/${id}/reviews`)
        .then(r => r.json())
        .then(r => setReviews(r))
    }, [])

    function handleDelete(review_id) {
        fetch(`http://localhost:9292/review/${review_id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(data => console.log(data))
    }

    const reviewsList = reviews.map(r => {
        return (
            <div key={r.id}>
                <h3>{r.user.name} Says:</h3>
                <p>{r.review}</p>
                <p>{r.stars}</p>
                <button>Edit Review</button>
                <button onClick={() => handleDelete(r.id)}>Delete Review</button>
            </div>
        )
    })

  return (
    <div>
        {reviewsList}
    </div>
  )
}

export default RestaurantReviews