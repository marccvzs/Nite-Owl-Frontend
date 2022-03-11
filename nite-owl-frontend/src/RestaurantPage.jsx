import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantList from "./RestaurantList";
import Search from "./Search";
import breweries from "./images/Brewery.jpg";
import comfort from "./images/Comfort.jpg";
import communal from "./images/Communal.jpg";
import french from "./images/French.jpg";
import indian from "./images/Indian.jpg";
import italian from "./images/Italian.jpg";
import latin from "./images/Latin.jpg";
import wineries from "./images/Winery.jpg";
import vegan from "./images/Vegan.jpg";

function RestaurantPage() {
  const [search, setSearch] = useState("");
  const images = [
    { italian: italian },
    { indian: indian },
    { latin: latin },
    { wineries: wineries},
    { vegan: vegan },
    { french: french },
    { communal: communal },
    { comfort: comfort },
    { breweries: breweries },
  ];

  const allImages = images.map((img) => {
    const pic = Object.values(img);
    const type = Object.keys(img);
    return (
      <Link key={type} className="imgTile" to={{ pathname: `/restaurants/${type}` }}>
        <div className="type"><img src={pic} alt="" />
        <p>{type}</p></div>
        
      </Link>
    );
  });


  return (
    <div>
      <h1>Our Favorites</h1>

      <div className="imgTileContainer">{allImages}</div>
      <div className="searchHeader">
        <h1>Find Your New Favorite Spot</h1>

        <Search search={search} onSearch={setSearch} />
      </div>
      <RestaurantList search={search}/>
    </div>
  );
}

export default RestaurantPage;
