import React, { useState, useEffect } from "react";

function RestaurantReviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/restaurant/${id}/reviews`)
      .then((r) => r.json())
      .then((r) => setReviews(r));
  }, []);

  const reviewsList = reviews.map((r) => {
    return (
      <div key={r.id}>
        <p>{r.stars}</p>
        <p style={{ fontSize: "20px", margin: "10px 0 15px 0" }}>
          <span style={{ fontWeight: "600" }}>
            {r.review.split(" ").slice(0, 4).join(" ")}
          </span>
          {' '+r.review.split(' ').slice(4, r.review.length-1).join(' ')}
        </p>
        <p>-{r.user.name}</p>
      </div>
    );
  });
  const review = reviewsList.map((r) => {
    return <div className="review">{r}</div>;
  });
  console.log(reviews);

  return (
    <div className="reviewsList">
      <div>{review}</div>
    </div>
  );
}

export default RestaurantReviews;
