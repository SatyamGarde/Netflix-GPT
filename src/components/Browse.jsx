import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./Hooks/useNowPlayingMovies";
import Maincontainer from "./BrowseContainer/Main/Maincontainer";
import { SecondaryContainer } from "./BrowseContainer/Secondary/SecondaryContainer";
import usePopularMovies from "./Hooks/usePopularMovies";
import useTopRatedMovies from "./Hooks/useTopRatedMovies";
import useUpcomingMovies from "./Hooks/useUpcomingMovies";
import { GptSearch } from "./BrowseContainer/GPT/GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const ShowGptSearch = useSelector((store) => store.GptSearch.GptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
    <div>
      <Header />
      </div>
      {ShowGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <Maincontainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
