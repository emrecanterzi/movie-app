import React from "react";
import MovieCartList from "./MovieCartList";

export const Home = () => {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center">Popular Movies</h1>
      <MovieCartList />
    </div>
  );
};

export default Home;
