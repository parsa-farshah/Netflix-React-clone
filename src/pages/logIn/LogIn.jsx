import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  //   image background
  const images =
    "https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/US-en-20250106-TRIFECTA-perspective_65e335d4-6f1e-4d03-8daa-e439fbaaa340_medium.jpg";
  return (
    <div>
      <div className="w-full h-screen">
        <img
          className="hidden  sm:block absolute w-full h-full object-cover "
          src={images}
          alt=""
        />
        <div className="bg-black/60 fixed w-full h-full top-0 left-0"></div>
        <div className="w-full fixed px-4 py-20 z-50">
          <div className="bg-black/75 max-w-[450px] h-[490px]  mx-auto text-white">
            <div className="mx-auto max-w-[320px] py-16 flex flex-col items-center">
              <h1 className="text-3xl font-bold">Log In</h1>

              <form className="w-full flex flex-col items-center py-4">
                <input
                  className="w-full p-3 my-2 bg-gray-600 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  className="w-full p-3 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 w-full font-bold rounded-sm">
                  Log In
                </button>
                <div className="w-full text-gray-600 flex justify-between">
                  <p>
                    <input className="mr-1" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help</p>
                </div>
                <p className="w-full  mt-7 text-white">
                  <span className="text-gray-600 mr-2">New to Netflix ?</span>
                  <Link to="/logIn">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
