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

            {/* <div className="member-view">
              <button className="btn btn-default">View All Members</button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="sale-investors">
        <div className="container">
          <h2>Our </h2>
          <h1>Private-Sale Investors</h1>
          <ProfileGrid members={investors.members} bigger prize />
          <Reviews reviews={investors.quotes} />
          
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

// export default ({ data }) => {
//   const { markdownRemark: post } = data;
//   return (
//     <ICOTeamSectionTemplate
//       team={post.frontmatter.team}
//       investors={post.frontmatter.investors}
//       advisoryboard={post.frontmatter.advisoryboard}
//     />
//   );
// };

// export const ICOTeamSectionFragment = graphql`
//   fragment ICOTeamDetails on MarkdownRemark {
//     frontmatter {
//       team {
//         members {
//           image
//           name
//           description
//         }
//       }
//       investors {
//         members {
//           image
//           name
//           description
//         }
//       }
//       advisoryboard {
//         members {
//           image
//           name
//           description
//         }
//       }
//     }
//   }
// `;

// export const ICOTeamSectionQuery = graphql`
//   query ICOTeamSection($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         team {
//           members {
//             image
//             name
//             description
//           }
//         }
//         investors {
//           members {
//             image
//             name
//             description
//           }
//         }
//         advisoryboard {
//           members {
//             image
//             name
//             description
//           }
//         }
//       }
//     }
//   }
// `;
