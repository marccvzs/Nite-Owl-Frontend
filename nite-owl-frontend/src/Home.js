import React from "react";
import header from "./images/pexels-photo-5865071.jpg";
function Home() {
  return (
    <>
      <div className="relative ">
        <img className="w-full flex" src={header} />
        <div className="absolute top-0 text-white">Nite Owl</div>
  
      </div>
    </>
  );
}

export default Home;
