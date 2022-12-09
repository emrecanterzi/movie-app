import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPopularMovies } from "../actions";
import MovieCart from "../components/MovieCart";

export const PopularMovies = ({ movies, getPopularMovies }) => {
  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <MovieCart movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.popularMovies,
});

const mapDispatchToProps = {
  getPopularMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
