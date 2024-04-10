import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="pl-6 pt-3 text-white">
      <h1 className="py-3 text-3xl font-bold">{title}</h1>
      <div className="flex overflow-x-auto hide-scroll-bar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
