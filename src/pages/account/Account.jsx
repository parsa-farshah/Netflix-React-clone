import React from "react";

export default function Account() {
  //   image background
  const images =
    "https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/US-en-20250106-TRIFECTA-perspective_65e335d4-6f1e-4d03-8daa-e439fbaaa340_medium.jpg";
  return (
    <>
      <div className="w-full h-full">
        <div>
          <img
            className=" absolute w-full h-full object-cover "
            src={images}
            alt=""
          />
          <div className="w-full h-screen bg-black/70 fixed flex justify-center items-center">
            <p className="text-white absolute text-4xl">My Favorite Show</p>
          </div>
        </div>
      </div>
    </>
  );
}
