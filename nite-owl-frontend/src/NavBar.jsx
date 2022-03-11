import React from "react";
import { Link, useParams } from "react-router-dom";
import Owls from "./images/Owls.JPG";

function NavBar() {
  return (
    <>
      <div className="navBar">
        <Link to="/">
          <div className="navTitle">Nite Owl</div>
        </Link>
        <img src={Owls}></img>
        <div className="navLinks">
          <Link to="/restaurants">
            <div className="nav">Make a Date</div>
          </Link>
          <Link to="/user/:id/reservations">
            <div className="nav"> Your Reservations</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
