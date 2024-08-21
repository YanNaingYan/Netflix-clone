import React, { useContext, useEffect, useState } from "react";
import instance from "../api/axios";
import requests from "../api/api";
import "../row.css";
import { GeneralContext } from "./GeneralContext";
import { FaPlus } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
const Banner = () => {
  const { handleClick } = useContext(GeneralContext);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await instance.get(requests.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    };

    fetchData();
  }, []);
  const [list, setList] = useState(false);
  const handleList = () => {
    setList(!list);
  };
  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
      className=" bg-cover  text-white h-[448px] object-center md:object-contain select-none"
    >
      <div className="ml-7 pt-36 h-[330px]">
        <h1 className="text-3xl md:text-5xl font-bold pb-2 mb-2">
          {movie?.name || movie?.title}
        </h1>
        <div className="flex">
          <button
            className="flex items-center  outline-none font-bold px-8 py-2 mr-4 bg-[rgb(51,51,51,0.5)] rounded-md hover:bg-[rgb(230,230,230)] hover:text-black hover:transition-all duration-200"
            onClick={() => handleClick(movie)}
          >
            <FaPlay className="mr-2 text-sm" /> Play
          </button>
          <button
            onClick={handleList}
            className="flex items-center outline-none font-bold px-6 py-2 pb-2 mr-4 bg-[rgb(51,51,51,0.5)] rounded-md hover:bg-[rgb(230,230,230)] hover:text-black hover:transition-all duration-200"
          >
            <FaPlus className="mr-1" /> My List
          </button>
        </div>
        <p className={`text-red-600 ${!list && "opacity-0"} `}>
          This function is currently unavailable!
        </p>
        <p className="w-[20rem] md:w-[45rem] text-gray-300 leading-5 pt-4 text-sm">
          {movie?.overview}
        </p>
      </div>
      <div className="h-[7.4rem] banner-bottom" />
    </div>
  );
};

export default Banner;
