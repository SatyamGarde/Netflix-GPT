import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import GptSearchReducer from "../components/BrowseContainer/GPT/GptSearchSlice";
import configReducer from "../components/BrowseContainer/GPT/languageSlice";

const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    GptSearch: GptSearchReducer,
    language: configReducer,
  },
});

export default appStore;
