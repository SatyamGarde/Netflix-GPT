import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "./languageConstants";
import { API_OPTIONS } from "../../../Utils/Constants";
import { useState } from "react";
import { addGptSearchMovies } from "../../../Utils/moviesSlice";
const GptSearchBar = () => {
    const langKey = useSelector(store=>store.language.chooselanguage);
    const MovieName = useRef(null);
    const [tmdbResults, setTmdbResults] = useState([]);
    const dispatch = useDispatch();
    
    const handleGptSearchClick = async()=>{
      const movie = MovieName.current.value;
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);

        const json = await data.json();
        setTmdbResults(json.results);
    };
    dispatch(addGptSearchMovies(tmdbResults));



  return (
    <div className="flex justify-center items-start h-screen">
      <div className="bg-black md:p-4 p-2 md:w-2/3 flex justify-start items-center">
        <input
        ref={MovieName}
          type="text"
          className="md:p-5 p-3 md:w-full w-38  m-2 bg-white text-xl rounded-lg"
          placeholder={lang[langKey].placeholder}
        />
        <button className="text-white text-xl font-bold bg-red-700 w-40 md:p-5 p-3 rounded-lg" onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
