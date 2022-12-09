import React from "react";
import { Link } from "react-router-dom";

export default function SearchMovieCart({ movie }) {
  const { id, vote_average, poster_path, title, overview, release_date } =
    movie;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 d-flex d-md-block">
          <img
            src={`http://image.tmdb.org/t/p/w200${poster_path}`}
            className="img-fluid rounded-start mx-auto"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {title} - <span className="badge bg-success">{vote_average}</span>
            </h5>
            <p className="card-text">{overview}</p>
            <p className="card-text">
              <small className="text-muted">Release Date: {release_date}</small>
            </p>
            <Link to={`/movie/${id}`} className="card-link">
              Go To Movie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
