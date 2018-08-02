import React from "react";
import Link from "gatsby-link";
import CookieBanner from 'react-cookie-banner';

import logo from "../img/logo.png";
const break_starttime = (new Date("Aug 3, 2018 14:00:00 UTC").getTime()<=new Date().getTime()) // to remove set this to false

const Navbar = () => (
  <header className="header">
  {/* <CookieBanner
      message='This website uses cookies. By using our site you agree to our privacy policy'
      onAccept={() => {}}
      cookie="user-has-accepted-cookies"
      dismissOnScrollThreshold={1000}
    /> */}
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
            <li className="nav-item">
              <Link className="nav-link" to="/crwd-network-bounty-program">
                Bounty
              </Link>
            </li>
          </ul>
          <div className="textwidget custom-html-widget">
            <div className="header-btn">
              <a href="/img/conda-white-paper.pdf" className="btn btn-default" target="_blank">White Paper</a>
              {!break_starttime && <a href="/i/order" className="btn btn-primary">Buy Now</a>}
              {break_starttime && <a href="/i/whitelist" className="btn btn-primary">Whitelist</a>}
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
