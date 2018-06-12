import React, { PureComponent } from "react";
import AnimatedNumber from "react-animated-number";
import axios from "axios";

export default class Balance extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      tokens: 0
    };
  }
  componentDidMount() {
    this.updateBalance();
    this.timer = setInterval(this.updateBalance.bind(this), 30 * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  updateBalance() {
    const defaultBalance =
      typeof window !== "undefined" &&
      window.localStorage &&
      localStorage.getItem("tokens")
        ? parseInt(localStorage.getItem("tokens"))
        : 0;
    this.setState({ tokens: defaultBalance });
    //this.updateBalance();
    let baseurl = "https://ico.conda.online";
    /* //test locally
    if (typeof window !== "undefined") {
      const host = window.location.hostname;
      baseurl =
        host === "localhost"
          ? "http://localhost:4000"
          : host === "d71z42a560a2e.cloudfront.net"
            ? "https://d71z42a560a2e.cloudfront.net"
            : baseurl;
    }*/

    //console.log(baseurl+"/p/balance")
    axios
      .get(baseurl + "/p/balance")
      .then(response => {
        //console.log(response);
        const tokens = parseInt(response.data.tokens);
        typeof window !== "undefined" &&
          window.localStorage &&
          localStorage.setItem("tokens", tokens);
        this.setState({tokens});
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    //console.log(this.state.balance);
    if (typeof this.state.tokens !== "number" || this.state.tokens < 1)
      return null;
    return (
      <div>
        <AnimatedNumber
          //component="text"
          value={this.state.tokens}
          style={{
            transition: "0.8s ease-out",
            fontSize: 62,
            transitionProperty: "background-color, color, opacity"
          }}
          //   frameStyle={perc =>
          //     perc === 100 ? {} : { backgroundColor: "#ffeb3b" }
          //   }
          duration={600}
          stepPrecision={0}
          formatValue={n => n.toLocaleString()}
        />
        <div className="legend">Tokens Sold</div>
      </div>
    );
  }
}
