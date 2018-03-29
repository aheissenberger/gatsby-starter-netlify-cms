import React from "react";

const ProfileGrid = ({ members, bigger, prize }) => (
  <div className="row">
    {members.map( (item,index) => (
      <div className={"col-sm-12 col-md-6 "+(bigger?"col-lg-4":"col-lg-3")} key={index}>
        <div className="investors-card">
          <span className="member-image">
            <img src={item.image} alt="image" />
          </span>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          {prize?(<span className="invest-prize">$</span>):null}
        </div>
      </div>
    ))}
  </div>
);

export default ProfileGrid;
