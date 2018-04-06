import React from "react";
import progressImage from "../img/progress.png";
import logo from "../img/CRWD Network Logo_square.png";

const Hero = ({}) => (
  <section className="banner">
    <div className="hero-banner">
      <div className="hero-block">
        <h2 style={{ textTransform: "uppercase" }}>
          The{" "}
          <img
            src={logo}
            style={{ width: "auto", height: "1.9ex", marginBottom: "-0,1ex" }}
            alt="CRWD"
          />{" "}
          Network
        </h2>
        <h1>Tokenized Equity Offerings</h1>
        <p>
          A decentralized network protocol for issuing and managing tokenized
          equity offerings of SMEs, Start-ups and Real Estate Projects.
        </p>
        <div className="progress-block" style={{ visibility: "hidden" }}>
          <img src={progressImage} alt="progress" />
        </div>
        <p>Pre-Sale starts in:</p>
        <div className="time-block">
          <div className="days">
            <span>27</span>
            <span>Days</span>
          </div>
          <div className="hours">
            <span>7</span>
            <span>hours</span>
          </div>
          <div className="minutes">
            <span>55</span>
            <span>minutes</span>
          </div>
          <div className="seconds">
            <span>10</span>
            <span>seconds</span>
          </div>
        </div>
        <div className="button-pane">
          {/* <div className="btn-inner">
            <a href="/privatesale" className="btn btn-primary">
            Apply for Private-Sale
            </a>
            <p>&amp; grab 30% bonus!</p>
          </div> */}
          <div className="btn-inner">
            <a href="/whitelist" className="btn btn-primary">
              Whitelist Wallet
            </a>
            {/* <p>&amp; grab 30% bonus!</p> */}
          </div>
          <div className="btn-inner">
            <a href="/icoinfo" className="btn btn-default">
              How to Participate
            </a>
            {/* <p>
              or watch the&nbsp;<a
                href="https://www.youtube.com/channel/UCvnUfzByoiX-R26GqmD0y0A/feed"
                target="_blank"
              >
                video
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
