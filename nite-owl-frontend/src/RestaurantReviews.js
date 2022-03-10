import React, { useState, useEffect } from 'react'

function RestaurantReviews({ id }) {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/restaurant/${id}/reviews`)
        .then(r => r.json())
        .then(r => setReviews(r))
    }, [])

    console.log(reviews)

    const reviewsList = reviews.map(r => {
        return (
            <div key={r.id}>
                <h3>{r.user.name} Says:</h3>
                <p>{r.review}</p>
                <p>{r.stars}</p>
                <button>Edit Review</button>
                <button>Delete Review</button>
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