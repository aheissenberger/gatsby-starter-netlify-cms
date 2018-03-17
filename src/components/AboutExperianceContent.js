import React from "react";

const AboutExperianceContent = ({ heading, subheading, description, image }) => (
  <div className="row">
    <div className="col-sm-12 col-md-6 col-lg-6">
      <div className="chart-img text-center">
        <img src={image} alt="chart" />
      </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
      <div className="about-content">
        <h2>{heading}</h2>
        <p className="light">{subheading}</p>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default AboutExperianceContent;
