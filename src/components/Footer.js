import React from "react";

const Footer = () => (
  <footer>
    <div className="footer-top">
      <div className="container">
        <ul className="top-list">
          <li>
            <a>Download White paper </a>
          </li>
          <li>
            <a>Imprint </a>
          </li>
          <li>
            <a>Press </a>
          </li>
          <li>
            <a>Blog </a>
          </li>
          <li>
            <a>Visit CONDA.eu</a>
          </li>
        </ul>
        <div className="email">
          Email Us:
          <a>team@conda.eu</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="address">
          CONDA AG, Donau-City-Straße 6, 1220 Vienna / Austria
        </div>
        <div className="social-media">
          <ul className="media-list">
            <li>
              <i className="fa fa-facebook" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-twitter" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-paper-plane" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-github-alt" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true" />
            </li>
          </ul>
        </div>
        <div className="copyright">
          Copyright © 2018. | Created with ♥ at CONDA.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
