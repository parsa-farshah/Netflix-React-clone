import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-5 px-8 w-full z-[100] absolute">
      <Link to="/">
        <h1 className="text-red-600 text-xl sm:text-4xl font-bold cursor-pointer uppercase">
          <ReactTyped strings={["netflix"]} typeSpeed={480} />
        </h1>
      </Link>
      {/* اگه ایمیل درست بود یا نبود */}

      <div>
        <Link to="/logIn">
          <button className="text-white text-sm sm:text-lg font-bold pr-5">
            Sign In
          </button>
        </Link>

        <Link to="/signUp">
          <button className="bg-red-600 text-sm sm:text-lg font-bold text-white hover:bg-red-800 duration-500 py-2 px-6 rounded-md">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
