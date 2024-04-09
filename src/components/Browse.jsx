import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./Hooks/useNowPlayingMovies";
import Maincontainer from "./BrowseContainer/Main/Maincontainer";
import { SecondaryContainer } from "./BrowseContainer/Secondary/SecondaryContainer";
const Browse = () => {

  useNowPlayingMovies();

  return (
    <>
      <Header />
      <Maincontainer/>
      <SecondaryContainer/>
      <div className="text-black z-20 mt-9">Browse</div>
     
    </>
  );
};

export default Browse;
