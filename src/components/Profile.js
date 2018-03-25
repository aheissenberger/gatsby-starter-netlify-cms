import React from "react";

const ProfileGrid = ({ members }) => (
  <div className="row">
    {members.map(item => (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="investors-card">
          <span className="member-image">
            <img src={item.image} alt="image" />
          </span>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span className="invest-prize">$</span>
        </div>
      </div>
    ))}
  </div>
);

export default ProfileGrid;
