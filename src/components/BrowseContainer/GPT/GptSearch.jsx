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
        className="w-full h-screen md:h-auto object-cover"
        alt="Background"
      />
      <div className="absolute inset-28">
        <GptSearchBar />
      </div>
      {isSearchResultsAvailable &&
      <div className='absolute md:inset-52 inset-0 md:mt-20 mt-52 bg-black h-[45%]'>
        <MovieList title={"Searched Movies"} movies={GptMovies?.gptSearchMovies} />
      </div>
      }
    </div>
  );
};
