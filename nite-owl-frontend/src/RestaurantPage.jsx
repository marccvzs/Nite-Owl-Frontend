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
  const history = useHistory();

  // search bar here
  function handleClick(e){
    history.push(`/${e.target.name}`)
    console.log(e.target)
  }
  
  return (
    <div>
      <h2>Our Favorites</h2>
      <div className="imgTileContainer">
        <div className="imgTile"><img name="Italian" onClick={handleClick} src={italian} alt="Italian"/><p>Italian</p></div>
        <div className="imgTile"><img name="Indian" onClick={handleClick} src={indian} alt="Inidia"/><p>Indian</p></div>
        <div className="imgTile"><img name="Latin" onClick={handleClick} src={latin} alt="Latin"/><p>Latin</p></div>
        <div className="imgTile"><img name="Wineries" onClick={handleClick} src={pate} alt="Wineries"/><p>Wineries</p></div>
        <div className="imgTile"><img name="Comfort" onClick={handleClick} src={comfort} alt="Comfort"/><p>Comfort</p></div>
        <div className="imgTile"><img name="Vegan" onClick={handleClick} src={vegan} alt="Vegan"/><p>Vegan</p></div>
        <div className="imgTile"><img name="Communal" onClick={handleClick} src={communal} alt="Communal"/><p>Communal</p></div>
        <div className="imgTile"><img name="Breweries" onClick={handleClick} src={brewery} alt="Breweries"/><p>Breweries</p></div>
        <div className="imgTile"><img name="French" onClick={handleClick} src={french} alt="French"/><p>French</p></div>
      </div>
      <RestaurantList />
      <ScheduleForm />
    </div>
  );
}

export default RestaurantPage;
