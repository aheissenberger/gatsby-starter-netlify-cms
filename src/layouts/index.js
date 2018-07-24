import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div className="outer-wrapper">
    <Helmet>
        <title>THE CRWD NETWORK | CONDA ICO</title>
        <meta property="og:url" content="http://ico.conda.online/" />
        <meta property="og:type" content="website" />
        <meta name="description" content="A decentralized network protocol for issuing and managing tokenized equity offerings of SMEs, Start-ups and Real Estate Projects." />
        <meta property="og:title" content="THE CRWD NETWORK | CONDA ICO" />
        <meta property="og:description" content="A decentralized network protocol for issuing and managing tokenized equity offerings of SMEs, Start-ups and Real Estate Projects." />
        <meta property="og:image" content={'https://ico.conda.online/img/socialmedia-preview.png'} />
      </Helmet>
    <Navbar />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
