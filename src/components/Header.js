import React from "react";
import { NavLink } from "react-router-dom";

import "bulma/css/bulma.css";

function Header(props) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink to="/" exact className="navbar-item">
          <img src="../logo.png" width="112" height="28" alt="logo" />
        </NavLink>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink to="/" exact className="navbar-item">
            Home
          </NavLink>

          <a className="navbar-item">Documentation</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink to="/signup" className="button is-primary">
                <strong>Sign up</strong>
              </NavLink>
              <NavLink to="/login" className="button is-light">
                Log in
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
