import {
  ERROR,
  GET_MOVIES,
  GET_MOVIE_BY_ID,
  GET_POPULAR_MOVIES,
  SEARCH_MOVIE,
} from "../actions/actionTypes";
const initialState = {
  movies: [],
  movie: {},
  searchMovies: [],
  popularMovies: [],
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: payload, error: null };

    case GET_MOVIE_BY_ID:
      return { ...state, movie: payload, error: null };

    case SEARCH_MOVIE:
      return { ...state, searchMovies: payload, error: null };

    case GET_POPULAR_MOVIES:
      return { ...state, popularMovies: payload, error: null };

    case ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
export default reducer;
