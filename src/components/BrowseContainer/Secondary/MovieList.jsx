import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="pl-6 pt-3 text-white bg-black">
      <h1 className="py-3 text-2xl md:text-3xl font-bold">{title}</h1>
      <div className="flex overflow-x-auto hide-scroll-bar">
        <div className="flex ">
          {movies.map((movie) => (
            <Link to={`/popup/${movie.id}`} key={movie.id}>
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
