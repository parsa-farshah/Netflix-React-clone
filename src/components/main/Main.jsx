import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../Request";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [readMoreOverview, setReadMoreOverview] = useState(false);

  const readMore = (str, num) => {
    if (str?.length > num) {
      return str.slice(str, num) + "...";
    } else {
      return str;
    }
  };

  const handleReadMore = (event) => {
    setReadMoreOverview(!readMoreOverview);
  };

  useEffect(() => {
    axios.get(requests.requestPopular).then((result) => {
      setMovies(result.data.results);

      setSelectedMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length)
        ]
      );
    });
  }, []);
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[550px] absolute bg-gradient-to-r from-[#000000]"></div>
        <img
          className="w-full object-cover h-full"
          src={`https://image.tmdb.org/t/p/original/${selectedMovie?.backdrop_path}`}
          alt={selectedMovie?.title}
        />
        <div className="absolute top-[20%] p-4 md:p-10">
          <h1 className="text-xl font-bold md:text-3xl lg:text-5xl mb-3">
            {selectedMovie?.title}
          </h1>
          <div>
            <button className="border py-2 px-3 border-gray-300 bg-white text-black md:py-3 md:px-5 ">
              Play
            </button>
            <button className="border py-2 px-3 border-gray-300 bg-black text-white md:py-3 md:px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm  py-3">
            Released : {selectedMovie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[60%] xl:max-w-[35%] text-gray-200">
            {!readMoreOverview
              ? readMore(selectedMovie?.overview, 100)
              : readMore(selectedMovie?.overview, 10000)}
            <span
              onClick={handleReadMore}
              className="text-red-600 cursor-pointer"
            >
              {!readMoreOverview ? "Read More" : "Read Less"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
