import React from "react";
import Content, { HTMLContent } from "../components/Content";
import AboutExperianceContent from "../components/AboutExperianceContent";
import quoteImage from '../img/white-quote.png';
import secgrap1Image from '../img/sec-grap1.png';
import secgrap2Image from '../img/sec-grap2.png';

export const AboutSectionTemplate = ({ title, title1, title2, facts, crowdinvesting }) => {
  return (
    <section id="about" className="about">
      <div className="crowdfinancing">
        <div className="container">
          <div className="crowdfinancing-inner">
            <div className="section-header">
              <h2>{title1}</h2>
              <h1>{title2}</h1>
            </div>

            {facts.map(({ heading, subheading, description, image }) => (
              <AboutExperianceContent
                key={heading}
                heading={heading}
                subheading={subheading}
                description={description}
                image={image}
              />
            ))}

            <div className="button-pane">
              <div className="btn-inner">
                <button className="btn btn-primary">
                  Apply for Private Sale
                </button>
                <p>&amp; grab 30% bonus!</p>
              </div>
              <div className="btn-inner">
                <button className="btn btn-default">
                  Download our White paper
                </button>
                <p>
                  or download the
                  <a>light paper</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="crowdinvesting">
        <div className="first-section__text">
          <div className="text-block__left">
            <h2>
              {crowdinvesting.firstsection.title1}
            </h2>
            <h1>
              {crowdinvesting.firstsection.title2}
            </h1>
            <div className="quot-text">
              <span className="quote-icon">
                <img src={quoteImage} alt="quote" />
              </span>
              <p>
              {crowdinvesting.firstsection.quote}
              </p>
            </div>
          </div>
          <div className="text-block__right">
            <p>
              {crowdinvesting.firstsection.description}
            </p>
          </div>
          <div className="first-section-img">
            <img src={secgrap1Image} alt="img" />
          </div>
        </div>
        <div className="second-section">
          <div className="section-image">
            <img src={secgrap2Image} alt="img" />
          </div>
          <div className="second-section__text">
            <h2>{crowdinvesting.secondsection.title1}</h2>
            <h1>{crowdinvesting.secondsection.title2}</h1>
            <p>
              {crowdinvesting.secondsection.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <AboutSectionTemplate
      title={post.frontmatter.title}
      title1={post.frontmatter.title1}
      title2={post.frontmatter.title2}
      facts={post.frontmatter.facts}
      crowdinvesting= {post.frontmatter.crowdinvesting}
    />
  );
};

export const aboutSectionFragment = graphql`
  fragment AboutDetails on MarkdownRemark {
    frontmatter {
      title
      title1
      title2
      facts {
        heading
        subheading
        description
        image
      }
      crowdinvesting {
        firstsection {
          title1
          title2
          quote
          description
        }
        secondsection {
          title1
          title2
          description
        }
      }
    }
  }
`;

export const aboutSectionQuery = graphql`
  query AboutSection($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...AboutDetails
    }
  }
`;