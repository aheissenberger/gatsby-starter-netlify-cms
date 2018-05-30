import React, { Component } from "react";
import AnimatedNumber from "react-animated-number";
import axios from "axios";

export default class Balance extends Component {
  constructor(props) {
    super();

    this.state = {
      balance: 0
    };
  }
  componentDidMount() {
    this.updateBalance();
    this.timer = setInterval(this.updateBalance.bind(this), 30*1000);
  }
  componentWillUnmount(){

    clearInterval(this.updateBalance);
}
  updateBalance() {
    const defaultBalance =
    typeof window !== "undefined" &&
    window.localStorage &&
    localStorage.getItem("balance")
      ? parseInt(localStorage.getItem("balance"))
      : 0;
  this.setState({ balance: defaultBalance });
  //this.updateBalance();
  let baseurl = 'https://5tlybomgll.execute-api.eu-west-1.amazonaws.com/prod';
  if (typeof window !== "undefined") {
     const host = window.location.hostname
    baseurl = (host === 'localhost'?'http://localhost:4000':host==='d71z42a560a2e.cloudfront.net'?'https://d71z42a560a2e.cloudfront.net/stag':baseurl)
  }
 console.log(baseurl+"/p/balance")
  axios
    .get(baseurl+"/p/balance")
    .then(response => {
      //console.log(response);
      typeof window !== "undefined" &&
        window.localStorage &&
        localStorage.setItem("balance", response.data.balance);
      this.setState(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  render() {
    //console.log(this.state.balance);
    return (
      <div>
        <AnimatedNumber
          //component="text"
          value={this.state.balance}
          style={{
            color: "#1759ab",
            transition: "0.8s ease-out",
            fontSize: 62,
            transitionProperty: "background-color, color, opacity"
          }}
          //   frameStyle={perc =>
          //     perc === 100 ? {} : { backgroundColor: "#ffeb3b" }
          //   }
          duration={600}
          formatValue={n => n.toLocaleString()}
        />
        <div class="legend">Token Sold</div>
      </div>
    );
  }
}
