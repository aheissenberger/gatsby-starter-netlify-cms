import React from "react";
import progressImage from "../img/progress.png";
import logo from "../img/CRWD Network Logo_square.png";
import Balance from "./Balance";

const currentPhase = () => {
  if (
    typeof window !== "undefined" &&
    window.localStorage &&
    localStorage.getItem("phase")
  ) {
    return localStorage.getItem("phase");
  }
  const pre_sale_start = new Date("jun 4, 2018 18:00:00 UTC").getTime();
  const pre_sale_end = new Date("jun 6, 2018 18:00:00 UTC").getTime();
  const sale_end = new Date("jul 31, 2018 18:00:00 UTC").getTime();
  const now = new Date().getTime();
  if (now > sale_end) return 3; // Sale closed
  if (now > pre_sale_end) return 2; // Crwd Sale started
  if (now > pre_sale_start) return 1; // Pre Sale started
  return 0; // before pre sale - whitelisting
};

//TODO: change button Whitelisting to "BUY NOW"

const phaseName = p => {
  switch (p) {
    case 0:
      return "Pre-Sale starts in:";
    case 1:
      return "Pre-Sale ends in:";
    case 2:
      return "Crowd-Sale ends in:";
  }
};
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
        <div className={(currentPhase()<1?'progress-block hideToken':'progress-block')} >
          <Balance />
          {/* <img src={progressImage} alt="progress" /> */}
        </div>
        <p>{phaseName(currentPhase())}</p>
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
