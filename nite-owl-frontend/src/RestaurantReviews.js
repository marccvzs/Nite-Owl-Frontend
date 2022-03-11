import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";

function RestaurantReviews({ id }) {
  const [reviews, setReviews] = useState([]);
  const [leaveReview, setLeaveReview] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9292/restaurant/${id}/reviews`)
      .then((r) => r.json())
      .then((r) => setReviews(r));
  }, [id]);

  function handleLeaveReview() {
    setLeaveReview((leaveReview) => !leaveReview);
  }

  function handleSubmit(newReview) {
    setReviews((reviews) => [...reviews, newReview]);
  }

  const reviewsList = reviews.map((r) => {
    return (
      <div key={r.id}>
        <div className='review'>
        <p>{r.stars}</p>
        <p style={{ fontSize: "20px", margin: "10px 0 15px 0" }}>
          <span style={{ fontWeight: "600" }}>
            {r.review.split(" ").slice(0, 4).join(" ")}
          </span>
          {" " +
            r.review
              .split(" ")
              .slice(4, r.review.length - 1)
              .join(" ")}
        </p>
        <p>-{r.user.name}</p>
        </div>
      </div>
    );
  });
  const review = reviewsList.map((r) => {
    return <div className="review">{r}</div>;
  });

  return (
    <div className="reviewsList">
      <button onClick={() => handleLeaveReview()}>
        {leaveReview ? "Exit" : "Leave a"} Review
      </button>
      <input type="checkbox" id="demo2" />
      <label
        className="demo2"
        for="demo"
        style={{ visibility: leaveReview ? "visible" : "hidden" }}
      >
        <ReviewForm id={id} onUpdate={handleSubmit} />{" "}
      </label>

      <div>{review}</div>
    </div>
  );
}

export default RestaurantReviews;
