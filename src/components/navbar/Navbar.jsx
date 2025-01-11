import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { ReactTyped } from "react-typed";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/signUp");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between py-5 px-8 w-full z-[100] absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer uppercase">
          <ReactTyped strings={["netflix", "parsa" , "fresh" , "FrontEnd" , "Developer"]} typeSpeed={180} backSpeed={320} loop />
        </h1>
      </Link>
      {/* اگه ایمیل درست بود یا نبود */}
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white md:text-lg font-bold pr-5">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-red-600 md:text-lg font-bold text-white hover:bg-red-800 duration-500 py-2 px-6 rounded-md"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/logIn">
            <button className="text-white md:text-lg font-bold pr-5">
              Sign In
            </button>
          </Link>

          <Link to="/signUp">
            <button className="bg-red-600 md:text-lg font-bold text-white hover:bg-red-800 duration-500 py-2 px-6 rounded-md">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
