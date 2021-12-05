import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg py-3 fixed-top navbar-light nav-bg shadow-sm">
          <div className="container">
            <a
              className="navbar-brand"
              style={{ fontFamily: "Lobster" }}
              href="/"
            >
              SP News
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Categories
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/business">
                      Business
                    </Link>
                    <Link className="dropdown-item" to="/entertainment">
                      Entertainment
                    </Link>
                    <Link className="dropdown-item" to="/general">
                      General
                    </Link>
                    <Link className="dropdown-item" to="/health">
                      Health
                    </Link>
                    <Link className="dropdown-item" to="/science">
                      Science
                    </Link>
                    <Link className="dropdown-item" to="/sports">
                      Sports
                    </Link>
                    <Link className="dropdown-item" to="/technology">
                      Technology
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://rafiferdos.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dev Contact
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-danger" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
