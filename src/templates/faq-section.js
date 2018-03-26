import React from "react";
import Content, { HTMLContent } from "../components/Content";

export const FAQSectionTemplate = ({ title, faqs }) => {
  return (
    <section id="faq" className="ico-team">
      <div className="faq">
        <div className="container">
          <h2>{title}</h2>
          <div id="accordion" role="tablist" aria-multiselectable="true">
            {faqs.map((item, index) => (
              <div className="card">
                <div className="card-header" role="tab" id={"heading" + index}>
                  <a
                    className="collapse collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href={"#collapse" + index}
                    aria-expanded="false"
                    aria-controls={"collapse" + index}
                  >
                    {item.question}
                  </a>
                </div>
                <div
                  id={"collapse" + index}
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby={"heading" + index}
                >
                  <div className="card-block">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
