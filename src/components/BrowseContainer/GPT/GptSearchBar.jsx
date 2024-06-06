import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "./languageConstants";
import { API_OPTIONS } from "../../../Utils/Constants";
import { addGptSearchMovies } from "../../../Utils/moviesSlice";
import { model } from "../../../Utils/GeminiAi";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.language.chooselanguage);
  const MovieName = useRef(null);
  const dispatch = useDispatch();

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const movie = MovieName.current.value;
    console.log("Movie name is:", MovieName.current.value);

    const prompt = `Act as a movies suggestion system and suggest movies for the querry "${movie}" only give me names of 5 movies , comma separated like the example result given ahead. Example result: kung fu panda, Intersteller, Iron Man, Batman, Spider Man`;

    const response = await model.generateContent(prompt);
    console.log("Response is:", response);
    const suggestions =
      response?.response?.candidates[0]?.content?.parts[0].text.split(",");
    console.log("Movies suggestions are", suggestions);

    const PromiseArray = suggestions.map((movie) => searchMoviesTMDB(movie));

    const searchedResults = await Promise.all(PromiseArray);

    console.log(searchedResults);

    dispatch(
      addGptSearchMovies({
        MoviesNames: suggestions,
        MoviesResults: searchedResults,
      })
    );
  };

  return (
    <div className="flex justify-center items-start h-screen">
      <div className="bg-black md:p-4 p-2 md:w-2/3 flex justify-start items-center">
        <input
          ref={MovieName}
          type="text"
          className="md:p-5 p-3 md:w-full w-38  m-1 md:m-2 bg-white text-xl rounded-lg"
          placeholder={lang[langKey].placeholder}
        />
        <button
          className="text-white text-xl font-bold bg-red-700 hover:text-gray-300 hover:bg-red-800 w-36 md:p-5 p-3  rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
