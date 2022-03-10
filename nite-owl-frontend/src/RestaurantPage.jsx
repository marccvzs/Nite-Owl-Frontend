import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantList from "./RestaurantList";
import ScheduleForm from "./ScheduleForm";
import Search from "./Search";
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
  const [search, setSearch] = useState("");
  const images = [
    { italian: italian },
    { indian: indian },
    { latin: latin },
    { pate: pate },
    { comfort: comfort },
    { vegan: vegan },
    { communal: communal },
    { brewery: brewery },
    { french: french },
  ];

  const allImages = images.map((img) => {
    const pic = Object.values(img);
    const type = Object.keys(img);
    return (
      <Link to={{ pathname: `/restaurants/${type}` }}>
        <div className="imgTile">
          <img src={pic} alt="" />
          <p>{type}</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h2>Our Favorites</h2>
  
        <div className="imgTileContainer">{allImages}</div>

      <h2>Find Your New Favorite Spot</h2>
      <Search search={search} onSearch={setSearch} />
      <RestaurantList search={search} />
      <ScheduleForm />
    </div>
  );
}

export default RestaurantPage;
