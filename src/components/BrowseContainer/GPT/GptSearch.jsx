import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../../../Utils/Constants";
import { useSelector } from "react-redux";
import MovieList from "../Secondary/MovieList";

export const GptSearch = () => {
  const GptMovies = useSelector((store) => store.gptMovies);

  const { MoviesNames, MoviesResults } = GptMovies;

  const isSearchResultsAvailable = MoviesNames && MoviesNames.length > 0;
  return (
    <div className="relative w-full h-screen">
      <img
        src={BG_URL}
        className="w-full h-screen fixed top-0 left-0 md:h-auto object-cover"
        alt="Background"
      />
      <div className="absolute inset-28">
        <GptSearchBar />
      </div>
      {isSearchResultsAvailable && (
        <div className="absolute  md:inset-52 inset-0 md:mt-20 mt-52 h-screen">
          {MoviesNames.map((moviename, index) => (
            <MovieList
              key={moviename}
              title={moviename}
              movies={MoviesResults[index]}
            />
          ))}
        </div>
      )}
    </div>
  );
};
