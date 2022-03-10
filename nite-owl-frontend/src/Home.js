import React from "react";
import {Link} from "react-router-dom";
import banner from "./images/NewBanner.jpg";

function Home() {
  return (
    <>
      <div id="banner">
        <div id="banner_image"></div>
        <div id="banner_divider"></div>
        <p id="title">Nite Owl</p>
        <div id="bannerLinks">
        {/* <Link className="homeNav" to='/'>Home</Link> */}
        <Link className="homeNav" to='/restaurants'>Enter</Link>
        <div className="homeNavDivider"></div>
        {/* <Link className="homeNav" to='/reservations'>Your Reservations</Link> */}
        </div>
      </div>
    </>
  );
}

export default Home;
