import React from "react";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { showGptSearch } from "./BrowseContainer/GPT/GptSearchSlice";
import { changeLanguage } from "./BrowseContainer/GPT/languageSlice";
const Header = () => {
  const GptSearchbar = useSelector((store) => store.GptSearch.GptSearch);

  const dispatch = useDispatch();
  const handletoggleGptSearch = () => {
    dispatch(showGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute z-30 flex flex-wrap bg-gradient-to-b from-black w-full justify-between items-center md:px-8">
      <img className="  w-44 md:w-60 px-8 py-2 -mx-5" src={LOGO_URL} alt="Logo"></img>
      {GptSearchbar && (
        <select
          className="text-white bg-gray-900"
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
      )}
      <button
        onClick={handletoggleGptSearch}
        className="text-white text-xl md:text-3xl bg-purple-800 md:p-2 p-1 rounded-lg md:px-3"
      >
        {GptSearchbar? "HomePAge":"GPT Search"}
      </button>
    </div>
  );
};

export default Header;
