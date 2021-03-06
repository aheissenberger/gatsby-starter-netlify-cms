import React from "react";

const Footer = () => (
  <footer>
    <div className="footer-top">
      <div className="container">
        <ul className="top-list">
          <li>
            <a href="/img/conda-white-paper.pdf" target="_blank">Download White paper </a>
          </li>
          <li>
            <a href="/imprint">Imprint </a>
          </li>
          <li>
            <a href="/press">Press </a>
          </li>
          <li>
            <a href="/blog">Blog </a>
          </li>
          <li>
            <a href="https://www.conda.eu/en/datenschutzerklaerung_at/" target="_blank">Privacy Policy </a>
          </li>
          <li>
            <a href="https://www.conda.eu" target="_blank">Visit CONDA.eu</a>
          </li>
        </ul>
        <div className="email">
          Email Us:
          <a href="mailto:team@conda.eu">team@conda.eu</a>
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
              <a href="https://www.facebook.com/crwdnetwork/" title="facebook CRWD Token" target="_blank"><i className="fa fa-facebook" aria-hidden="true" /></a>
            </li>
            <li>
              <a href="https://twitter.com/conda_austria" title="Twitter CONDA" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /></a>
            </li>
            <li>
              <a href="https://t.me/conda_ico" title="Telegram" target="_blank"><i className="fa fa-paper-plane" aria-hidden="true" /></a>
            </li>
            <li>
              <a href="https://github.com/conda-ag" title="github CONDA AG" target="_blank"><i className="fa fa-github-alt" aria-hidden="true" /></a>
            </li>
            <li>
              <a href="https://www.reddit.com/user/ICO_CONDA/" title="reddit" target="_blank"><i className="fa fa-reddit" aria-hidden="true" /></a>
            </li>
            <li>
              <a href="mailto:team@conda.eu" title="team@conda.eu"><i className="fa fa-envelope" aria-hidden="true" /></a>
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
