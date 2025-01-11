import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../movie/Movie";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";

export default function Row({ title, fetchUrl, rowID }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((result) => {
      setMovies(result.data.results);
    });
  }, []);

  const leftSlider = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const rightSlider = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>

      <div className="relative flex items-center group">
        <IoChevronBackCircle
          onClick={leftSlider}
          className=" absolute left-0 text-white z-50 flex justify-center items-center opacity-70 hover:opacity-100 duration-400 hidden group-hover:block "
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="flex w-full h-full relative overflow-x-scroll scroll-smooth no-scrollbar "
        >
          {movies.map((item, id) => (
            <Movie item={item} />
          ))}
        </div>
        <IoChevronForwardCircle
          onClick={rightSlider}
          className="right-0 text-white absolute z-50 justify-center items-center opacity-70 hover:opacity-100 duration-400 hidden group-hover:block "
          size={40}
        />
      </div>
    </>
  );
}
