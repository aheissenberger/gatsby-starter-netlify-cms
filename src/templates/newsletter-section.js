import React from "react";
import Content, { HTMLContent } from "../components/Content";


export const NewsletterSectionTemplate = ({
  title1,
  title2,
  placeholder,
  label
}) => {
  return (
    <section id="newsletter" className="ico-team">
      <div className="news-letter">
        <div className="container">
          <div className="news-letter__block">
            <div className="block-inner">
              <p>{title1}</p>
              <h3>{title1}</h3>
              <div className="news-feild">
                <input
                  className="form-control"
                  type="text"
                  placeholder={placeholder}
                  id="example-text-input"
                />
                <button className="btn btn-success">{label}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

