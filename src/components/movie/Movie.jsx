import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function Movie({ item, id }) {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };
  return (
    <div>
      <div className="w-[160px] sm:w-[200px] cursor-pointer inline-block relative p-2">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute text-white top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 ease-in-out duration-500">
          <p className="font-bold text-xs md:text-sm flex justify-center items-center h-full text-center">
            {item?.title}
          </p>
          <p onClick={handleLike} className="text-white">
            {like ? (
              <FaHeart className="absolute top-4 left-4 duration-100 " />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 duration-100 " />
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
