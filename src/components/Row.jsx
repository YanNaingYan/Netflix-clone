import React, { useContext, useEffect, useState } from "react";
import instance from "../api/axios";
import "../row.css";

import { GeneralContext } from "./GeneralContext";
const base_url = "https://image.tmdb.org/t/p/original/";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Loading from "./Loading";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const { handleClick } = useContext(GeneralContext);

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const req = await instance.get(fetchUrl);

      setMovies(req.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="ml-5 select-none">
      <h1 className="font-bold text-xl text-white">{title}</h1>
      <div className="flex overflow-y-hidden overflow-x-auto scrollbar-hide p-5 w-full ">
        <Carousel className="w-full px-4">
          <CarouselContent className="-ml-1">
            {isLoading ? (
              <Loading isLargeRow />
            ) : (
              movies.map((movie) => (
                <CarouselItem key={movie.id} className="pl-1 basis-1/7 ">
                  <img
                    onClick={() => handleClick(movie)}
                    className={`w-full object-contain h-[100px]  mr-2 hover:scale-105 transition-transform duration-500 select-none ${
                      isLargeRow && "h-[250px] hover:scale-110"
                    }`}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.title}
                  />
                </CarouselItem>
              ))
            )}
          </CarouselContent>
          <CarouselPrevious className="ml-8 bg-transparent text-white border-none hover:bg-gray-500" />
          <CarouselNext className="mr-8 bg-transparent text-white border-none hover:bg-gray-500" />
        </Carousel>
      </div>
    </div>
  );
};

export default Row;
