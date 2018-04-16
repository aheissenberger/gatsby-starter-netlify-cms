import React from "react";
import Content, { HTMLContent } from "../components/Content";
import NewsletterSendgrid from "../components/NewsletterSendgrid";

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
              <h3>{title2}</h3>
              <div className="news-feild">
              <NewsletterSendgrid />
                {/* <form
                  action="https://conda.us7.list-manage.com/subscribe/post?u=7756e216dd2606870dfb053c2&id=7c86d50a4e"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="c12 c6-lg mx-auto validate text-center"
                  target="_blank"
                  noValidate
                >
                  <div>
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      className="form-control"
                      placeholder={placeholder}
                      id="mce-EMAIL"
                      required=""
                    />

                    <input
                      type="submit"
                      value={label}
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="btn btn-success"
                    />
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_7756e216dd2606870dfb053c2_7c86d50a4e"
                      tabIndex="-1"
                      value=""
                    />
                  </div>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
