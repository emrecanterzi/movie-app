import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { searchMovie } from "../actions";
import SearchMovieCart from "./SearchMovieCart";

export const SearchMovieList = ({ movies, searchMovie }) => {
  const query = useLocation().search.split("=")[1];

  useEffect(() => {
    searchMovie(query);
  }, [query, searchMovie]);

  return (
    <div className="container">
      <h1 className="text-center">
        {movies.length} Results Found For{" "}
        <span className="text-success">-{query}-</span>
      </h1>
      {movies.length === 0 ? (
        <Link to={"/"} className="d-block text-decoration-none text-center">
          Click to Return Home
        </Link>
      ) : null}
      <div className="row">
        {movies.map((movie) => (
          <SearchMovieCart key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.searchMovies,
});

const mapDispatchToProps = { searchMovie };

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovieList);
