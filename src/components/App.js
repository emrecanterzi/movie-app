import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import "../styles/App.css";
import MovieDetails from "./MovieDetails";
import SearchMovieList from "./SearchMovieList";
import PopularMovies from "./PopularMovies";
import { connect } from "react-redux";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    console.clear();
  });

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/popularMovies" element={<PopularMovies />} />
        <Route path="/searchMovie" element={<SearchMovieList />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
