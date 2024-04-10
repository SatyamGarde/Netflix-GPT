import React from 'react';
import GptSearchBar from './GptSearchBar';
import { BG_URL } from '../../../Utils/Constants';
import { useSelector } from 'react-redux';
import MovieList from '../Secondary/MovieList';

export const GptSearch = () => {
  const GptMovies = useSelector(store=> store.gptMovies);


  const isSearchResultsAvailable = GptMovies && GptMovies.gptSearchMovies && GptMovies.gptSearchMovies.length > 0;
  return (
    <div className="relative w-full">
      <img
        src={BG_URL}
        className="w-full h-auto"
        alt="Background"
      />
      <div className="absolute inset-28">
        <GptSearchBar />
      </div>
      {isSearchResultsAvailable &&
      <div className='absolute inset-52 mt-20 bg-black'>
        <MovieList title={"Searched Movies"} movies={GptMovies?.gptSearchMovies} />
      </div>
      }
    </div>
  );
};
