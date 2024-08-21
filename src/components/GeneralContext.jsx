import movieTrailer from "movie-trailer";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const nav = useNavigate();

  const [selectedMovie, setSelectedMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [list, setList] = useState(false);

  const handleClick = (movie) => {
    setSelectedMovie(movie);
    nav("/video");
    if (trailerUrl) {
      setTrailerUrl("");
      nav("/home");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((e) => console.log(e));
    }
  };
  const handleList = () => {
    setList(!list);
  };

  return (
    <GeneralContext.Provider
      value={{ handleClick, selectedMovie, trailerUrl, list, handleList }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
