import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./Hooks/useNowPlayingMovies";
import Maincontainer from "./BrowseContainer/Main/Maincontainer";
import { SecondaryContainer } from "./BrowseContainer/Secondary/SecondaryContainer";
import usePopularMovies from "./Hooks/usePopularMovies";
import useTopRatedMovies from "./Hooks/useTopRatedMovies";
import useUpcomingMovies from "./Hooks/useUpcomingMovies";
const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      <Maincontainer/>
      <SecondaryContainer/>
    </>
  );
};

export default Browse;
