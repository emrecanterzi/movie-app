import axios from "axios";
import {
  ERROR,
  GET_MOVIES,
  GET_MOVIE_BY_ID,
  GET_POPULAR_MOVIES,
  SEARCH_MOVIE,
} from "./actionTypes";

const movieApiUrl = "https://api.themoviedb.org/3";
const apiKey = "81ad3d921f00529299f49faa5bd5947d";

export const getMoviesData = () => (dispatch) => {
  axios
    .get(`${movieApiUrl}/discover/movie?api_key=${apiKey}`)
    .then((response) => {
      dispatch({ type: GET_MOVIES, payload: response.data.results });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err });
    });
};

export const getMovieById = (id) => (dispatch) => {
  axios
    .get(`${movieApiUrl}/movie/${id}?api_key=${apiKey}`)
    .then((response) => {
      dispatch({ type: GET_MOVIE_BY_ID, payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err });
    });
};

export const searchMovie = (query) => (dispatch) => {
  axios
    .get(`${movieApiUrl}/search/movie?api_key=${apiKey}&query=${query}`)
    .then((response) => {
      dispatch({ type: SEARCH_MOVIE, payload: response.data.results });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err });
    });
};

export const getPopularMovies = () => (dispatch) => {
  axios
    .get(`${movieApiUrl}/movie/top_rated?api_key=${apiKey}`)
    .then((response) => {
      dispatch({ type: GET_POPULAR_MOVIES, payload: response.data.results });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err });
    });
};
