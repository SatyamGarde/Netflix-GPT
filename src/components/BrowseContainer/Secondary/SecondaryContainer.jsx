import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="mt-14 bg-black">
      <div className="-mt-60  relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.PopularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.TopRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.UpcomingMovies} />

        <MovieList title={"New Releases"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Hollywood Movies"} movies={movies?.PopularMovies} />
        <MovieList title={"Children & family Movies"} movies={movies?.TopRatedMovies} />
        <MovieList title={"Action & Adventure Movies"} movies={movies?.UpcomingMovies} />
        <MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Anime"} movies={movies?.PopularMovies} />
        <MovieList title={"Blockbuster Movies"} movies={movies?.TopRatedMovies} />
        <MovieList title={"Thriller Movies"} movies={movies?.UpcomingMovies} />
        <MovieList title={"Documentries"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"International Movies"} movies={movies?.PopularMovies} />
        <MovieList title={"Romantic Movies"} movies={movies?.TopRatedMovies} />
        <MovieList title={"sci-Fi & Fantasy Movies"} movies={movies?.UpcomingMovies} />
        
      </div>
    </div>
  );
};
