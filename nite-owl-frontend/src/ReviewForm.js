import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

function ReviewForm({ id }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    review: "",
    stars: "",
    user_id: 19,
  });

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        restaurant_id: id,
        user_id: 19,
        review: formData.review,
        stars: formData.stars,
      }),
    })
      .then((r) => {
        setSubmitted(true);
        return r.json();
      })
      .then((data) => {
        <Link
          to={{
            pathname: `/restaurant/${id}`,
          }}
        />
      });
  }

  console.log(formData);
  return (
    <div className="reviewContainer">
      <form className="reviewForm" onSubmit={handleSubmit}>
        <fieldset id="stars" onChange={handleChange}>
          <p>Rating</p>
          <div className="stars">
            <button
              type="button"
              onClick={handleChange}
              name="stars"
              value="⭐️"
            >
              &#9733;
            </button>
            <button
              type="button"
              onClick={handleChange}
              name="stars"
              value="⭐️ ⭐️"
            >
              &#9733; &#9733;
            </button>
            <button
              type="button"
              onClick={handleChange}
              name="stars"
              value="⭐️ ⭐️ ⭐️"
            >
              &#9733; &#9733; &#9733;
            </button>
          </div>
          <textarea
          type="text"
          placeholder="Leave a Review"
          value={formData.review}
          name="review"
          onChange={handleChange}
        />
        <div className="reviewButtons">
        <input type="submit" />
        <input type="reset" />
        </div>
        </fieldset>
        
      </form>
    </div>
  );
}

export default ReviewForm;
