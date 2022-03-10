import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CuisineGroup from "./CuisineGroup";

function Cuisine() {
    const [cuisineArray, setCuisineArray]=useState([])
    const {cuisine}=useParams();

    useEffect(()=>{
        fetch(`http://localhost:9292/restaurants/${cuisine}`)
        .then(r=>r.json())
        .then(data=>setCuisineArray(data))
    }, [cuisine])

    const rest=cuisineArray.map((r)=>{
        return <CuisineGroup
        key={r.id}
        r={r}
        />
    })


  return <div>{rest}</div>;
}

export default Cuisine;
