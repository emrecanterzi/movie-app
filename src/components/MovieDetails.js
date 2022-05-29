import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../actions";

export const MovieDetails = ({ movie, getMovieById }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id);
  }, [id, getMovieById]);

  const {
    backdrop_path,
    original_title,
    overview,
    release_date,
    revenue,
    vote_average,
    production_companies,
    budget,
  } = movie;

  return (
    <div className="container text-light pt-4">
      <button
        className="btn btn-outline-light w-100 mt-5 p-0"
        style={{ fontSize: "2rem", lineHeight: "2.5rem" }}
        onClick={() => {
          navigate(-1);
        }}
      >
        &#8592;
      </button>
      {backdrop_path ? (
        <div className="image-cap-container">
          <img
            src={`http://image.tmdb.org/t/p/w1280${backdrop_path}`}
            className="img-cap"
            alt=""
          />
        </div>
      ) : null}
      <div className="row my-4">
        <div className="col-12">
          <h1>
            {original_title} -{" "}
            <span className="badge bg-light text-dark">{vote_average}</span>
          </h1>
        </div>
        <div className="col-12 ">
          <p>{overview}</p>
          <p className="text-muted h5">{release_date}</p>
          <p className="text-muted h5">Revenue: ${revenue}</p>
          <p className="text-muted h5">Budget: ${budget}</p>
        </div>
        <div className="col-12 fixed-bottom">
          {production_companies ? (
            <div className="container">
              <div className="row d-flex justify-content-evenly bg-dark bg-gradient my-2 py-2">
                {production_companies.map((com) => (
                  <div className="col-3 h-100 text-center" key={com.id}>
                    <img
                      src={"http://image.tmdb.org/t/p/w200" + com.logo_path}
                      alt=""
                      className="img-fluid company-logo"
                    />
                    <h4>{com.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapDispatchToProps = { getMovieById };

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
