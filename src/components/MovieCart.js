import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const MovieCart = ({ movie }) => {
  const {
    original_title,
    poster_path,
    overview,
    vote_average,
    release_date,
    original_language,
    vote_count,
  } = movie;
  return (
    <div className="col-md-3 col-12 my-2">
      <div className="card h-100">
        <img
          className="card-img-top"
          src={`http://image.tmdb.org/t/p/w500${poster_path}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">{original_title}</h5>
          <p className="card-text">{overview}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Release Date: {release_date}</li>
          <li className="list-group-item">Lang: {original_language}</li>
          <li className="list-group-item">
            Vote: <span className="badge bg-danger">{vote_average}</span>
          </li>
          <li className="list-group-item">Vote Count: {vote_count}</li>
        </ul>
        <Link to={"/movie/" + movie.id} className="card-link  p-3">
          Go To Movie
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCart);
