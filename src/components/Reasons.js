import React from "react";

const ReasonGrid = ({ reasons }) => (
  <div className="purchase-card">
    {reasons.map( (item,index) => (
      <div className="card-block" key={index}>
        <span>
          <img src={item.icon} alt="image" />
        </span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
);

export default ReasonGrid;
