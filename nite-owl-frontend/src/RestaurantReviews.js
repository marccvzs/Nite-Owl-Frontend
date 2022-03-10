import React, { useState, useEffect } from 'react'

function RestaurantReviews({ id }) {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/restaurant/${id}/reviews`)
        .then(r => r.json())
        .then(r => setReviews(r))
    }, [])

    const reviewsList = reviews.map(r => {
        return (
            <div key={r.id}>
                <p>{r.review}</p>
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