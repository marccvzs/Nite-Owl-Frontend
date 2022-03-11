import React, { useState } from 'react';

function ReviewForm({ id, onUpdate }) {
    const [formData, setFormData] = useState({
        review: '',
        stars: '',
    })

    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:9292/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                restaurant_id: id,
                user_id: 8,
                review: formData.review,
                stars: formData.stars,
            })
        })
        .then(r => r.json())
        .then(newReview => window.location.reload(true))
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="stars">How many Stars: </label>
            <select name="stars" id="stars" onChange={handleChange}>
                <option value="⭐️">⭐️</option>
                <option value="⭐️ ⭐️">⭐️ ⭐️</option>
                <option value="⭐️ ⭐️ ⭐️">⭐️ ⭐️ ⭐️</option>
            </select>
            <textarea 
            type='text' 
            placeholder='Leave a Review' 
            value={formData.review} 
            name='review'
            onChange={handleChange}/>
            <input type='submit' />
            <input type='reset' />
        </form>
    </div>
  )
}

export default ReviewForm