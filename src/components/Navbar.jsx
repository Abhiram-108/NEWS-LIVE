import React from 'react';
import './navbar.css';

const Navbar = ({ setcategory }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <div>AB NEWS</div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <div
                className="nav-link navlink"
                onClick={() => {
                  setcategory('technology');
                }}
              >
                Technology
              </div>
            </li>
            <li className="nav-item active navlink">
              <div
                className="nav-link"
                onClick={() => {
                  setcategory('Business');
                }}
              >
                Business
              </div>
            </li>
            <li className="nav-item active navlink">
              <div
                className="nav-link"
                onClick={() => {
                  setcategory('sports');
                }}
              >
                sports
              </div>
            </li>
            <li className="nav-item active navlink">
              <div
                className="nav-link"
                onClick={() => {
                  setcategory('Entertainment');
                }}
              >
                Entertainment
              </div>
            </li>
            <li className="nav-item active navlink navlink1">
              <div
                className="nav-link"
                onClick={() => {
                  setcategory('Health');
                }}
              >
                Health
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
