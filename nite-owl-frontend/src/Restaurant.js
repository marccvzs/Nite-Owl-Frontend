import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';

function Restaurant() {
    const [restaurant, setRestaurant] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/restaurant/${id}`)
        .then(r => r.json())
        .then(r => setRestaurant(r))
    }, [id])
    console.log(restaurant)

  return (
    <div>
        <h2>{restaurant.restaurant_name}</h2>
        <img src={restaurant.restaurant_image} alt={restaurant.restaurant_name}/>
        <p>{restaurant.address}</p>
        <p>{restaurant.price}</p>
    </div>
  )
}

export default Restaurant