import React from 'react'
import progressImage from '../img/progress.png'
import logo from "../img/CRWD Network Logo_square.png";

const Hero = ({  }) => (
    <section className="banner">
    <div className="hero-banner">
      <div className="hero-block">
        <h2 style={{textTransform: "uppercase"}}>The <img src={logo} style={{width:"3.8ex", height:"auto"}} alt="CRWD" /> Network</h2>
        <h1>Tokenized Equity Offerings</h1>
        <p>A decentralized network protocol for issuing and managing tokenized equity offerings of SMEs, Start-ups and Real Estate Projects.</p>
        <div className="progress-block" style={{visibility:"hidden"}}>
          <img src={progressImage} alt="progress" />
        </div>
        <p>Private Sale ends in:</p>
        <div className="time-block"><div className="days"><span>27</span><span>Days</span></div><div className="hours"><span>7</span><span>hours</span></div><div className="minutes"><span>55</span><span>minutes</span></div><div className="seconds"><span>10</span><span>seconds</span></div></div>
        <div className="banner-btn">
          <button className="btn btn-primary">Apply for Private Sale</button>
          <p>&amp; grab 30% bonus!</p>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
