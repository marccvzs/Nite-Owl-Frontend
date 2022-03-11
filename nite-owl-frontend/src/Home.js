import React from "react";
import {Link} from "react-router-dom";
import Owls from "./images/Owls.JPG";

function Home() {
  return (
    <>
      <div id="banner">
        <div id="banner_image"></div>
        <div id="banner_divider"></div>
        <p id="title">Nite Owl</p>
        <div className="owlContainer">
        <img src={Owls}></img>
        </div>
        <div id="bannerLinks">
        <Link className="homeNav" to='/restaurants'>Enter</Link>
        <div className="homeNavDivider"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
