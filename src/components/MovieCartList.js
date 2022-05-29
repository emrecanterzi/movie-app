import { useEffect } from "react";
import { connect } from "react-redux";
import { getMoviesData } from "../actions";
import MovieCart from "./MovieCart";

export const MovieCartList = ({ movies, getMoviesData }) => {
  useEffect(() => {
    getMoviesData();
    return () => {};
  }, [getMoviesData]);

  return (
    <div className="row  mt-2">
      {movies.map((movie) => (
        <MovieCart movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  getMoviesData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCartList);
