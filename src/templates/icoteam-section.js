import React from "react";
import Content, { HTMLContent } from "../components/Content";
import quoteImage from "../img/quote.png";

export const ICOTeamSectionTemplate = ({
  title1,
  title2,
  quote,
  description
}) => {
  return (
    <section
      id="ico-team"
      className="ico-team wow fadeInUp"
      data-wow-duration="0.5s"
      style={{
        visibility: "visible",
        animationDuration: "0,5s",
        animationName: "fadeInUp"
      }}
    >
      <div className="team-member">
        <div className="container">
          <div className="team-inner">
            <h2>CONDA</h2>
            <h1>Team Members</h1>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="member-card">
                  <span className="member-profile">
                    <img src="./img/member.png" alt="image" />
                  </span>
                  <h3>Daniel Horak</h3>
                  <p>Co-Founder and Managing Partner Sales &amp; Marketing</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="member-card">
                  <span className="member-profile">
                    <img src="./img/member.png" alt="image" />
                  </span>
                  <h3>Daniel Horak</h3>
                  <p>Co-Founder and Managing Partner Sales &amp; Marketing</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="member-card">
                  <span className="member-profile">
                    <img src="./img/member.png" alt="image" />
                  </span>
                  <h3>Daniel Horak</h3>
                  <p>Co-Founder and Managing Partner Sales &amp; Marketing</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="member-card">
                  <span className="member-profile">
                    <img src="./img/member.png" alt="image" />
                  </span>
                  <h3>Daniel Horak</h3>
                  <p>Co-Founder and Managing Partner Sales &amp; Marketing</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="member-card">
                  <span className="member-profile">
                    <img src="./img/member.png" alt="image" />
                  </span>
                  <h3>Daniel Horak</h3>
                  <p>Co-Founder and Managing Partner Sales &amp; Marketing</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="member-card">
                  <span className="member-profile">
                    <img src="./img/member.png" alt="image" />
                  </span>
                  <h3>Daniel Horak</h3>
                  <p>Co-Founder and Managing Partner Sales &amp; Marketing</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="member-card">
                  <span className="member-profile">
                    <img src="./img/member.png" alt="image" />
                  </span>
                  <h3>Daniel Horak</h3>
                  <p>Co-Founder and Managing Partner Sales &amp; Marketing</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="member-card">
                  <span className="member-profile">
                    <img src="./img/member.png" alt="image" />
                  </span>
                  <h3>Daniel Horak</h3>
                  <p>Co-Founder and Managing Partner Sales &amp; Marketing</p>
                </div>
              </div>
            </div>
            <div className="member-view">
              <button className="btn btn-default">View All Members</button>
            </div>
          </div>
        </div>
      </div>
      <div className="sale-investors">
        <div className="container">
          <h2>Our </h2>
          <h1>Private-Sale Investors</h1>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="investors-card">
                <span className="member-image">
                  <img src="./img/member.png" alt="image" />
                </span>
                <h3>Hermann Hauser</h3>
                <p>
                  Serial entrepreneur, Co-Founder of Amadeus Capital &amp;
                  active business angel
                </p>
                <span className="invest-prize">$</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="investors-card">
                <span className="member-image">
                  <img src="./img/member.png" alt="image" />
                </span>
                <h3>Hermann Hauser</h3>
                <p>
                  Serial entrepreneur, Co-Founder of Amadeus Capital &amp;
                  active business angel
                </p>
                <span className="invest-prize">$</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="investors-card">
                <span className="member-image">
                  <img src="./img/member.png" alt="image" />
                </span>
                <h3>Hermann Hauser</h3>
                <p>
                  Serial entrepreneur, Co-Founder of Amadeus Capital &amp;
                  active business angel
                </p>
                <span className="invest-prize">$</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="investors-card">
                <span className="member-image">
                  <img src="./img/member.png" alt="image" />
                </span>
                <h3>Hermann Hauser</h3>
                <p>
                  Serial entrepreneur, Co-Founder of Amadeus Capital &amp;
                  active business angel
                </p>
                <span className="invest-prize">$</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="investors-card">
                <span className="member-image">
                  <img src="./img/member.png" alt="image" />
                </span>
                <h3>Hermann Hauser</h3>
                <p>
                  Serial entrepreneur, Co-Founder of Amadeus Capital &amp;
                  active business angel
                </p>
                <span className="invest-prize">$</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="investors-card">
                <span className="member-image">
                  <img src="./img/member.png" alt="image" />
                </span>
                <h3>Hermann Hauser</h3>
                <p>
                  Serial entrepreneur, Co-Founder of Amadeus Capital &amp;
                  active business angel
                </p>
                <span className="invest-prize">$</span>
              </div>
            </div>
          </div>
          <div className="invesrer-review">
            <h3>See what our Investors saying</h3>
            <div className="review-slide">
              <span className="review-quote">
                <img src="./img/invester-quote.png" alt="image" />
              </span>
              <div className="review-content">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item">
                      <p>
                        Current corporate structures are too slow to reflect the
                        demand for flexible investments. With an ICO, it's
                        possible to achieve something that can be done in a GmbH
                        and an AG only with great effort and expense."
                      </p>
                    </div>
                    <div className="carousel-item active">
                      <p>
                        Current corporate structures are too slow to reflect the
                        demand for flexible investments. With an ICO, it's
                        possible to achieve something that can be done in a GmbH
                        and an AG only with great effort and expense."
                      </p>
                    </div>
                  </div>
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={0}
                      className
                    >
                      <a>
                        <span>
                          <img src="./img/member.png" alt="image" />
                        </span>
                        <span>Niko Alm</span>
                      </a>
                    </li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={1}
                      className="active"
                    >
                      <a>
                        <span>
                          <img src="./img/member.png" alt="image" />
                        </span>
                        <span> Udo Georges</span>
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="advisory-board">
        <div className="container">
          <div className="advisory-inner">
            <h2>Our</h2>
            <h1>Advisory Board</h1>
            <div className="advisory-block">
              <div className="advisory-item">
                <span className="advisor-image">
                  <img src="./img/member.png" alt="image" />
                </span>
                <p>Manager and owner of the advertising agency 3C-Design</p>
              </div>
              <div className="advisory-item">
                <span className="advisor-image">
                  <img src="./img/member.png" alt="image" />
                </span>
                <p>Manager and owner of the advertising agency 3C-Design</p>
              </div>
              <div className="advisory-item">
                <span className="advisor-image">
                  <img src="./img/member.png" alt="image" />
                </span>
                <p>Manager and owner of the advertising agency 3C-Design</p>
              </div>
              <div className="advisory-item">
                <span className="advisor-image">
                  <img src="./img/member.png" alt="image" />
                </span>
                <p>Manager and owner of the advertising agency 3C-Design</p>
              </div>
              <div className="advisory-item">
                <span className="advisor-image">
                  <img src="./img/member.png" alt="image" />
                </span>
                <p>Manager and owner of the advertising agency 3C-Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-letter">
        <div className="container">
          <div className="news-letter__block">
            <div className="block-inner">
              <p>Get Latest Updates</p>
              <h3>All news &amp; updates about our upcoming ICO</h3>
              <div className="news-feild">
                <input
                  className="form-control"
                  type="text"
                  defaultValue="Artisanal kale"
                  id="example-text-input"
                />
                <button className="btn btn-success">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-partners">
        <div className="container">
          <h2>Our Partners</h2>
          <div className="client-block">
            <div className="client-item">
              <img src="./img/client1.png" alt="image" />
            </div>
            <div className="client-item">
              <img src="./img/client2.png" alt="image" />
            </div>
            <div className="client-item">
              <img src="./img/client3.png" alt="image" />
            </div>
            <div className="client-item">
              <img src="./img/client4.png" alt="image" />
            </div>
            <div className="client-item">
              <img src="./img/client5.png" alt="image" />
            </div>
            <div className="client-item">
              <img src="./img/client6.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
      <div className="faq">
        <div className="container">
          <h2>FAQs</h2>
          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div className="card">
              <div className="card-header" role="tab" id="headingOne">
                <a
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Collapsible Group Item #1
                </a>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="card-block">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingTwo">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Collapsible Group Item #2
                </a>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="card-block">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingThree">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Collapsible Group Item #3
                </a>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="card-block">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <ICOTeamSectionTemplate
      title={post.frontmatter.title}
      title1={post.frontmatter.title1}
      title2={post.frontmatter.title2}
      quote={post.frontmatter.quote}
      description={post.frontmatter.description}
    />
  );
};

export const solutionSectionFragment = graphql`
  fragment ICOTeamDetails on MarkdownRemark {
    frontmatter {
      title
      title1
      title2
      quote
      description
    }
  }
`;

export const solutionSectionQuery = graphql`
  query ICOTeamSection($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...ICOTeamDetails
    }
  }
`;
