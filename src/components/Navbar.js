import React from "react";
import Link from "gatsby-link";
import CookieBanner from 'react-cookie-banner';

import logo from "../img/logo.png";

//source: https://stackoverflow.com/a/19385791/828184
$(document).ready(function collapseOnClickFix(){
  $('.navbar .nav-item').on('click', function(){
    setTimeout(function(){ 
      $('.navbar-toggler').click();
     }, 150);
  });
});

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
              <a href="/whitelist" className="btn btn-primary">
                Whitelist now
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
