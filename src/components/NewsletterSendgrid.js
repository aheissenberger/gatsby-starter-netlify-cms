import Raven from 'raven-js';
import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {validate as isemail} from 'isemail';
import 'react-toastify/dist/ReactToastify.css';

export default class NewsletterSendgridyar extends Component {
  constructor() {
    super();

    this.state = {
      formFields: { email: "" }
    };
  }

  render() {
    const { email } = this.state.formFields;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="c12 c6-lg mx-auto validate text-center">
          <input
            type="email"
            name="email"
            id="2dswqdw"
            placeholder="Your Email"
            onChange={this.onChange}
            value={email}
            className="form-control"
          />
          <input type="submit" value="Subscribe" className="btn btn-success" />
        </form>
        <ToastContainer />
      </div>
    );
  }
  onChange = e => {
    let formFields = { ...this.state.formFields };
    formFields[e.target.name] = e.target.value;
    this.setState({
      formFields
    });
  };
  onSubmit = async e => {
    e.preventDefault();
    if (!isemail(this.state.formFields.email)) {
      toast.error("Please provide a valid email.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    const ld = localStorage.getItem("conda_utm");
    let utm = {};
    if (ld !== null) {
      utm = JSON.parse(ld);
    }
    const data = { ...this.state.formFields, ...this.props.setup, ...utm };
    try {
      const result = await axios.post("/newsletter/subscribe", data);
      this.setState({
        formFields: { email: "" }
      });
      toast(`We received your request and sent you a verification request to ${data.email}.`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 10000
      });
    } catch (error) {
      window.console && console.log(error);
      toast.error("Subscription failed! Please try again later.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 10000
      });
      Raven.captureException(error);
    }
  };
}
