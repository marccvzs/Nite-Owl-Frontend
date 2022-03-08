import React, {useEffect, useState} from 'react'
import RestaurantList from './RestaurantList'
import ScheduleForm from './ScheduleForm'

function RestaurantPage() {
    const [restaurantArray, setRestaurantArray]=useState([])

    useEffect(()=>{
        fetch('http://localhost:9292/restaurants')
        .then ((r)=>r.json())
        .then (data=>setRestaurantArray(data))
    }, [])
    console.log(restaurantArray)

    // search bar here

  return (
    <div className="bg-blue-700">
        <RestaurantList restaurantArray={restaurantArray} />
        <ScheduleForm />
    </div>
  )
}

export default RestaurantPage