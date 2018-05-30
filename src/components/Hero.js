import React from "react";
import progressImage from "../img/progress.png";
import logo from "../img/CRWD Network Logo_square.png";
import Balance from "./Balance";

/*
* for testing the phases you can set a localStorage variable "phase" with the phase to test (0 - 3)

*/

const phases_endtime = [
  //new Date("May 30, 2018 20:12:00 UTC").getTime(), // TEST DATE
  new Date("jun 4, 2018 18:00:00 UTC").getTime(), // whitelisting
  new Date("jun 6, 2018 18:00:00 UTC").getTime(), // Pre Sale end
  new Date("jul 31, 2018 18:00:00 UTC").getTime() // Sale closed
];

const getPhaseText = {
  counterHeadline: [
    "Pre-Sale starts in:",
    "Pre-Sale ends in:",
    "Crowd-Sale ends in:"
  ]
};

const Timecounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="time-block">
      <div className="days">
        <span>{days}</span>
        <span>Days</span>
      </div>
      <div className="hours">
        <span>{hours}</span>
        <span>hours</span>
      </div>
      <div className="minutes">
        <span>{minutes}</span>
        <span>minutes</span>
      </div>
      <div className="seconds">
        <span>{seconds}</span>
        <span>seconds</span>
      </div>
    </div>
  );
};

const Hero = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 0,
      tcounter: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      phaseText: ""
    };
  }

  componentDidMount() {
    this.updatePhase();
    this.timer = setInterval(this.updatePhase.bind(this), 1 * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  updatePhase() {
    const now = new Date().getTime();
    let phase = 0;
    if (
      typeof window !== "undefined" &&
      window.localStorage &&
      localStorage.getItem("phase")
    ) {
      phase = parseInt(localStorage.getItem("phase"));
    } else {
      for (let i = 0; phases_endtime.length - 1; i++) {
        if (now < phases_endtime[i]) {
          phase = i;
          break;
        }
      }
    }
    const distance = phases_endtime[phase] - now;
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const phaseText = getPhaseText.counterHeadline[phase];
    this.setState({
      phase,
      tcounter: { days, hours, minutes, seconds },
      phaseText
    });
  }

  render() {
    const {} = this.props;
    //console.log(this.state.phase, this.state.phaseText);
    return (
      <section className="banner">
        <div className="hero-banner">
          <div className="hero-block">
            <h2 style={{ textTransform: "uppercase" }}>
              The{" "}
              <img
                src={logo}
                style={{
                  width: "auto",
                  height: "1.9ex",
                  marginBottom: "-0,1ex"
                }}
                alt="CRWD"
              />{" "}
              Network
            </h2>
            <h1>Tokenized Equity Offerings</h1>
            <p>
              A decentralized network protocol for issuing and managing
              tokenized equity offerings of SMEs, Start-ups and Real Estate
              Projects.
            </p>
            <div
              className={
                this.state.phase < 1
                  ? "progress-block hideToken"
                  : "progress-block"
              }
            >
              {this.state.phase > 0 ? (
                <Balance />
              ) : (
                <div style={{ height: "70px" }} />
              )}
            </div>
            {this.state.phase < 3 && (
              <div>
                <p>{this.state.phaseText}</p>
                <Timecounter {...this.state.tcounter} />
              </div>
            )}
            <div className="button-pane">
              {/* <div className="btn-inner">
                <a href="/privatesale" className="btn btn-primary">
                Apply for Private-Sale
                </a>
                <p>&amp; grab 30% bonus!</p>
              </div> */}
              <div className="btn-inner">
                <a href="/whitelist" className="btn btn-primary">
                  {this.state.phase > 0 ? "Buy Now" : "Whitelist Wallet"}
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
  }
};

export default Hero;
