import React from "react";

const ProfileGrid = ({ members, bigger, prize }) => (
  <div className="row">
    {members.map(({ link, image, name, description }, index) => (
      <div
        className={"col-sm-12 col-md-6 " + (bigger ? "col-lg-4" : "col-lg-3")}
        key={index}
      >
        <div className="investors-card">
          <a href={link}>
            <span className="member-image">
              <img src={image} alt="image" />
            </span>
            <h3>{name}</h3>
            <p>{description}</p>
            {prize ? <span className="invest-prize">$</span> : null}
          </a>
        </div>
      </div>
    ))}
  </div>
);

export default ProfileGrid;
