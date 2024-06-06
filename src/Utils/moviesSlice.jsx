import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    PopularMovies: null,
    TopRatedMovies: null,
    UpcomingMovies: null,
    MoviesNames: null,
    MoviesResults: null,
    MoviesDataByID: null,
    SuggestedMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addGptSearchMovies: (state, action) =>{
      const {MoviesNames, MoviesResults} = action.payload;
      state.MoviesNames = MoviesNames;
      state.MoviesResults = MoviesResults;
    },
    addMoviesDataById: (state, action) =>{
      state.MoviesDataByID = action.payload;
    },
    addSuggestedMovies: (state, action) =>{
      state.SuggestedMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addGptSearchMovies,
  addMoviesDataById,
  addSuggestedMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
