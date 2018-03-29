import React from "react";
import Link from "gatsby-link";


import logo from "../img/logo.png";

const Navbar = () => (
  <header className="header">
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
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
                to="/#about"
                data-id="about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#solution"
                data-id="solution"
              >
                Solution
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/#token-wrap"
                data-id="token-wrap"
              >
                Token
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/#ico-team"
                data-id="ico-team"
              >
                ICO Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#contact">
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
              <a href="/img/conda-white-paper.pdf" className="btn btn-default" target="_blank">White Paper</a>
              <a href="/privatesale" className="btn btn-primary">
                Apply for Private Sale
              </a>
            </div>
            <div className="papper-plain">
              <a href="https://t.me/conda_ico" title="Telegram" target="_blank">
                <i className="fa fa-paper-plane" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Navbar;
