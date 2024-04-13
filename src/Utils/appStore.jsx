import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import GptSearchReducer from "../components/BrowseContainer/GPT/GptSearchSlice";
import configReducer from "../components/BrowseContainer/GPT/languageSlice";
import userReduser from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReduser,
    movies: moviesReducer,
    GptSearch: GptSearchReducer,
    language: configReducer,
    gptMovies: moviesReducer,
    MovieData: moviesReducer,
  },
});

export default appStore;
