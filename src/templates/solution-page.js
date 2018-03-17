import React from "react";
import Content, { HTMLContent } from "../components/Content";
import quoteImage from '../img/quote.png';

export const SolutionPageTemplate = ({ title1, title2, quote, description}) => {
  return (
    <section id="solution" className="solution">
            <div className="container">
              <div className="solution-inner">
                <h2>{title1}</h2>
                <h1>{title2}
                </h1>
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
                      <p>
                      {description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="solution-btn">
                  <div className="btn-inner">
                    <button className="btn btn-primary">Join CONDA ICO</button>
                    <p>&amp; grab 30% bonus!</p>
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
    <SolutionPageTemplate
      title={post.frontmatter.title}
      title1={post.frontmatter.title1}
      title2={post.frontmatter.title2}
      quote={post.frontmatter.quote}
      description={post.frontmatter.description}
    />
  );
};

export const solutionPageFragment = graphql`
  fragment SolutionDetails on MarkdownRemark {
    frontmatter {
      title
      title1
      title2
      quote
      description
    }
  }
`;

export const aboutPageQuery = graphql`
  query SolutionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...SolutionDetails
    }
  }
`;
