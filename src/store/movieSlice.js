import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    topRatedSeries: null,
    movieDetails: null,
    hindiMovies2024: null,
    hindiMovies2023: null,
    hindiMovies2022: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },

    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    addHindiMovies2024: (state, action) => {
      state.hindiMovies2024 = action.payload;
    },
    addHindiMovies2023: (state, action) => {
      state.hindiMovies2023 = action.payload;
    },
    addHindiMovies2022: (state, action) => {
      state.hindiMovies2022 = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTopRatedSeries,
  addMovieDetails,
  addHindiMovies2024,
  addHindiMovies2023,
  addHindiMovies2022
} = movieSlice.actions;

export default movieSlice.reducer;
