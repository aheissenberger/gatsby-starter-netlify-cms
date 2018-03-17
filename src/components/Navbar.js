import React from "react";
import Link from "gatsby-link";


import logo from "../img/logo.png";

const Navbar = () => (
  <header className="header">
    <div className="container">
      <nav className="navbar navbar-toggleable-md">
        <Link className="navbar-brand" to="#">
          <img src={logo} alt="Logo" />
        </Link>
        <a
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarsExampleContainer"
          aria-controls="navbarsExampleContainer"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="navbarsExampleContainer">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="#about"
                data-id="about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#solution"
                data-id="solution"
              >
                Solution
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#token-wrap"
                data-id="token-wrap"
              >
                Token
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#ico-team"
                data-id="ico-team"
              >
                ICO Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
          <div className="textwidget custom-html-widget">
            <div className="header-btn">
              <button className="btn btn-default">White Paper</button>
              <button className="btn btn-primary">
                Apply for Private Sale
              </button>
            </div>
            <div className="papper-plain">
              <Link>
                <i className="fa fa-paper-plane" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Navbar;
