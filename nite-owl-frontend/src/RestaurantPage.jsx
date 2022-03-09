import React, { useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import RestaurantList from "./RestaurantList";
import ScheduleForm from "./ScheduleForm";
import brewery from "./images/Brewery.jpg";
import comfort from "./images/Comfort.jpg";
import communal from "./images/Communal.jpg";
import french from "./images/French.jpg";
import indian from "./images/Indian.jpg";
import italian from "./images/Italian.jpg";
import latin from "./images/Latin.jpg";
import pate from "./images/Winery.jpg";
import vegan from "./images/Vegan.jpg";

function RestaurantPage() {
  const [restaurantArray, setRestaurantArray] = useState([]);
  const history=useHistory();

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then((r) => r.json())
      .then((data) => setRestaurantArray(data));
  }, []);
  console.log(restaurantArray);

  // search bar here
  function handleClick(e){
    history.push(`/${e.target.name}`)
    console.log(e.target)
  }
  

  return (
    <div>
      <h2>Our Favorites</h2>
      <div className="imgTileContainer">
        <div className="imgTile"><img name="Italian" onClick={handleClick} src={italian} /><p>Italian</p></div>
        <div className="imgTile"><img name="Indian" onClick={handleClick} src={indian} /><p>Indian</p></div>
        <div className="imgTile"><img name="Latin" onClick={handleClick} src={latin} /><p>Latin</p></div>
        <div className="imgTile"><img name="Wineries" onClick={handleClick} src={pate} /><p>Wineries</p></div>
        <div className="imgTile"><img name="Comfort" onClick={handleClick} src={comfort} /><p>Comfort</p></div>
        <div className="imgTile"><img name="Communal" onClick={handleClick} src={communal} /><p>Communal</p></div>
        <div className="imgTile"><img name="Breweries" onClick={handleClick} src={brewery} /><p>Breweries</p></div>
        <div className="imgTile"><img name="French" onClick={handleClick} src={french} /><p>French</p></div>
        <div className="imgTile"><img name="Vegan" onClick={handleClick} src={vegan} /><p>Vegan</p></div>
      </div>
      <RestaurantList restaurantArray={restaurantArray} />
      <ScheduleForm />
    </div>
  );
}

export default RestaurantPage;
