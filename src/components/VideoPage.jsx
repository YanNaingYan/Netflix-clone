import React, { useContext, useEffect, useState } from "react";
import { GeneralContext } from "./GeneralContext";
import YouTube from "react-youtube";
import netflix from "../img/netflix-text.png";

import { useNavigate } from "react-router-dom";

const VideoPage = () => {
  const nav = useNavigate();
  const { selectedMovie, trailerUrl } = useContext(GeneralContext);

  const handleBack = () => {
    nav("/home");
  };
  const [list, setList] = useState(false);
  const handleList = () => {
    setList(!list);
  };
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="bg-[rgb(17,17,17)] w-full h-screen">
      <div className=" flex flex-col-reverse md:flex-row justify-between ">
        <div className="ml-4 w-[70%] md:w-full">
          <h1 className="text-white text-3xl md:text-5xl font-bold pt-4 md:pt-8 ">
            {selectedMovie?.title || selectedMovie?.name || ""}
          </h1>
          <p className="w-[80%] line-clamp-3 md:w-[40rem] leading-5 pt-4 text-sm text-gray-300 ">
            {selectedMovie?.overview}
          </p>
          <p className="text-white font-semibold mt-2">
            Rating - {selectedMovie?.vote_average.toFixed(1)} / 10
          </p>
          <div className="mt-8">
            <button
              onClick={handleList}
              className=" outline-none font-bold px-4 h-[42px]  mr-4 hover:bg-[rgb(51,51,51,0.5)] rounded-md bg-[rgb(230,230,230)] text-black hover:text-white hover:transition-all duration-200 "
            >
              Add to List
            </button>
            <button
              className=" outline-none font-bold px-4  h-[42px]   hover:bg-[rgb(51,51,51,0.5)] rounded-md bg-[rgb(230,230,230)] text-black hover:text-white hover:transition-all duration-200 "
              onClick={handleBack}
            >
              <p className="flex items-center">Go Back</p>
            </button>
          </div>
          <p className={`text-red-600 ${!list && "opacity-0"} `}>
            This function is currently unavailable!
          </p>
        </div>
        <img src={netflix} alt="" className="w-[180px] h-[60px] md:h-[80px]" />
      </div>
      <YouTube
        videoId={trailerUrl}
        opts={opts}
        className=" mt-2 p-4 w-full h-[100px]"
      />
    </div>
  );
};

export default VideoPage;
