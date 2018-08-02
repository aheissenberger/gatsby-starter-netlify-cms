import React from "react";
import Content, { HTMLContent } from "../components/Content";
import quoteImage from "../img/quote.png";

const break_starttime = (new Date("Aug 3, 2018 14:00:00 UTC").getTime()<=new Date().getTime()) // to remove set this to false

export const SolutionSectionTemplate = ({
  title1,
  title2,
  quote,
  description
}) => {
  return (
    <section id="solution" className="solution">
      <div className="container">
        <div className="solution-inner">
          <h2>{title1}</h2>
          <h1>{title2}</h1>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="solution-left">
                <span className="solution-quot">
                  <img src={quoteImage} alt="quote" />
                </span>
                <p>{quote}</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="solution-right">
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="solution-btn">
            <div className="btn-inner">
              <a href={break_starttime?"/i/whitelist":"/i/order"} className="btn btn-primary">Join CONDA ICO</a>
              {/* <p>&amp; grab 30% bonus!</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default ({ data }) => {
//   const { markdownRemark: post } = data;
//   return (
//     <SolutionSectionTemplate
//       title={post.frontmatter.title}
//       title1={post.frontmatter.title1}
//       title2={post.frontmatter.title2}
//       quote={post.frontmatter.quote}
//       description={post.frontmatter.description}
//     />
//   );
// };

// export const solutionSectionFragment = graphql`
//   fragment SolutionDetails on MarkdownRemark {
//     frontmatter {
//       title
//       title1
//       title2
//       quote
//       description
//     }
//   }
// `;

// export const solutionSectionQuery = graphql`
//   query SolutionSection($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       ...SolutionDetails
//     }
//   }
// `;
