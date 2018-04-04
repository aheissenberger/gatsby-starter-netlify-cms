import React from "react";
import Content, { HTMLContent } from "../components/Content";

export const IcoRatingsSectionTemplate = ({ title, partners }) => {
  return (
    <section id="partners" className="ico-team">
      <div className="our-partners">
        <div className="container">
          <h2>{title}</h2>
          <div className="client-block">
            {partners.map((item, index) => (
              <div className="client-item" key={index}>
                {item.url !== "" ? (
                  <a href={item.url}>
                    <img src={item.image} alt={item.name} />
                  </a>
                ) : (
                  <img src={item.image} alt={item.name} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
