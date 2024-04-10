import React from "react";
import { useSelector } from "react-redux";
import { lang } from "./languageConstants";

const GptSearchBar = () => {
    const langKey = useSelector(store=>store.language.chooselanguage);

  return (
    <div className="flex justify-center items-start h-screen">
      <div className="bg-black p-4 w-2/3 flex justify-start items-center">
        <input
          type="text"
          className="p-5 w-full m-4 bg-white text-xl rounded-lg"
          placeholder={lang[langKey].placeholder}
        />
        <button className="text-white text-xl font-bold bg-red-700 w-40 p-5 rounded-lg">
          {lang[langKey].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
