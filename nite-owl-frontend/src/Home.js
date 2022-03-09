import React from "react";
import banner from "./images/NewBanner.jpg";

function Home() {
  return (
    <>
      <div className="banner">
        <img id="header" alt="restaurant" src={banner} />
        <p id="title">Nite Owl</p>
      </div>
    </>
  );
}

export default Home;
