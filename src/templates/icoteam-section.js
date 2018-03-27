import React from "react";
import Content, { HTMLContent } from "../components/Content";
import quoteImage from "../img/quote.png";
import ProfileGrid from "../components/Profile";
import Reviews from "../components/Reviews";

export const ICOTeamSectionTemplate = ({ team, investors, advisoryboard }) => {
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
            <ProfileGrid members={team.members} />

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
          <ProfileGrid members={investors.members} bigger prize />
          <Reviews reviews={investors.quotes} />
          {/* <div className="invesrer-review">
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
          </div> */}
        </div>
      </div>
      <div className="advisory-board">
        <div className="container">
          <div className="advisory-inner">
            <h2>Our</h2>
            <h1>Advisory Board</h1>
            <ProfileGrid members={advisoryboard.members} />
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
      team={post.frontmatter.team}
      investors={post.frontmatter.investors}
      advisoryboard={post.frontmatter.advisoryboard}
    />
  );
};

export const ICOTeamSectionFragment = graphql`
  fragment ICOTeamDetails on MarkdownRemark {
    frontmatter {
      team {
        members {
          image
          name
          description
        }
      }
      investors {
        members {
          image
          name
          description
        }
      }
      advisoryboard {
        members {
          image
          name
          description
        }
      }
    }
  }
`;

export const ICOTeamSectionQuery = graphql`
  query ICOTeamSection($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        team {
          members {
            image
            name
            description
          }
        }
        investors {
          members {
            image
            name
            description
          }
        }
        advisoryboard {
          members {
            image
            name
            description
          }
        }
      }
    }
  }
`;
