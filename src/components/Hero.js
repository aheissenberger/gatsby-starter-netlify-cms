import React from 'react'
import progressImage from '../img/progress.png'

const Hero = ({  }) => (
    <section className="banner">
    <div className="hero-banner">
      <div className="hero-block">
        <h2>Building the</h2>
        <h1>Financial Market of the Future.</h1>
        <p>Professionalizing the alternative financing market by enabling a secure infrastructure for company investments
          on the blockchain.</p>
        <div className="progress-block">
          <img src="./wp site_files/progress.png" alt="progress" />
        </div>
        {/* <p>endin</p> */}
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
