import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const inputChange = (e) => {
    setQuery(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searchMovie?query=${query}`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-md-5 fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movie App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={(isActive) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(isActive) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/popularMovies"
                >
                  Top Rated Movies
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" onSubmit={submitHandler}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Movie"
                aria-label="Search Movie"
                onChange={inputChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
