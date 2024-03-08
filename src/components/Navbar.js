//1. Props --> pros are properties jab hum koi component banate hai aur uska data hum apne hisab s set krna chahte hai to hum use data ko send krte hai parent ko and parent use receive krta hai as props
//2. props cannot be changed here once assigned
import React from "react";
import { Link } from "react-router-dom";
//import { ReactPropTypes } from 'react'

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
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

              {/* <Link> IS USED DESPITE OF <a> */}
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}


          {/* //ENABLE DARKMODE SWITCH */}
          <div
            className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"
              }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//PROPTYPES

// Navbar.propTypes={
//     title:PropTypes.string.isRequired,
//     about:PropTypes.string
// }

//default prop
// Navbar.defaultProps={
//     title:"Default tilte",
//     about:"About title"

// }
