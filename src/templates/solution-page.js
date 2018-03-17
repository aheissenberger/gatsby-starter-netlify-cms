import React from "react";
import Content, { HTMLContent } from "../components/Content";


export const SolutionPageTemplate = ({ }) => {
  return (
    <section id="solution" className="solution">
            <div className="container">
              <div className="solution-inner">
                <h2>The Solution For the</h2>
                <h1>Financial Market of the Future
                </h1>
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="solution-left">
                      <span className="solution-quot">
                        <img src="./wp site_files/quote.png" alt="quote" />
                      </span>
                      <p>
                        CONDA is a decentralized and distributed clearing system for crowdfinancing built on the blockchain, which will create the
                        financial market of the future.</p>
                      <p>
                        This technology allows anyone to securely and transparently invest in companies all around the world, in accordance with
                        regulatory requirements.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="solution-right">
                      <p>
                        CONDA faces the problems by creating the missing decentralized infrastructure built on the blockchain: for companies seeking
                        funds, investors looking for investment options and platform operators providing the appropriate tools.
                      </p>
                      <p>With this new platform, the power of the crowd will reach its full potential by being fully decentralized,
                        community-driven, transparent, and without any bo aries in the form of intermediaries between the participants
                        in the ecosystem.
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
    //   title={post.frontmatter.title}
    //   title1={post.frontmatter.title1}
    //   title2={post.frontmatter.title2}
    //   facts={post.frontmatter.facts}
    />
  );
};

export const solutionPageFragment = graphql`
  fragment SolutionDetails on MarkdownRemark {
    frontmatter {
      title
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
