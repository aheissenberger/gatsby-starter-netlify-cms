import React from "react";
import Content, { HTMLContent } from "../components/Content";

export const AboutSectionTemplate = (data) => {
  const { title1, title2 } = data.data.frontmatter;
  //const PageContent = contentComponent || Content;

  return (
    <section id="about" className="about">
      <div className="crowdfinancing">
        <div className="container">
          <div className="crowdfinancing-inner">
            <div className="section-header">
              <h2>{title1}</h2>
              <h1>{title2}</h1>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="chart-img text-center">
                  <img src="../img/chart.png" alt="chart" />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="about-content">
                  <h2>Experience</h2>
                  <p className="light">
                    A team of high-class investors and advisors.
                  </p>
                  <p>
                    CONDA launched its crowdinvesting platform in 2013. The
                    blockchain infrastructure presented is the logical step for
                    bringing crowdfinancing to the next level by utilizing the
                    most efficient technology, supported by our experienced team
                    and partners.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="about-content">
                  <h2>Experience</h2>
                  <p className="light">
                    A team of high-class investors and advisors.
                  </p>
                  <p>
                    CONDA launched its crowdinvesting platform in 2013. The
                    blockchain infrastructure presented is the logical step for
                    bringing crowdfinancing to the next level by utilizing the
                    most efficient technology, supported by our experienced team
                    and partners.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 text-center">
                <img src="../img/invest.png" alt="chart" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 text-center">
                <img src="../img/brain.png" alt="chart" />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="about-content">
                  <h2>Experience</h2>
                  <p className="light">
                    A team of high-class investors and advisors.
                  </p>
                  <p>
                    CONDA launched its crowdinvesting platform in 2013. The
                    blockchain infrastructure presented is the logical step for
                    bringing crowdfinancing to the next level by utilizing the
                    most efficient technology, supported by our experienced team
                    and partners.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="about-content">
                  <h2>Experience</h2>
                  <p className="light">
                    A team of high-class investors and advisors.
                  </p>
                  <p>
                    CONDA launched its crowdinvesting platform in 2013. The
                    blockchain infrastructure presented is the logical step for
                    bringing crowdfinancing to the next level by utilizing the
                    most efficient technology, supported by our experienced team
                    and partners.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 text-center">
                <img src="../img/list.jpg" alt="chart" />
              </div>
            </div>
            <div className="row no-border">
              <div className="col-sm-12 col-md-6 col-lg-6 text-center">
                <img src="../img/glob.jpg" alt="chart" />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="about-content">
                  <h2>Experience</h2>
                  <p className="light">
                    A team of high-class investors and advisors.
                  </p>
                  <p>
                    CONDA launched its crowdinvesting platform in 2013. The
                    blockchain infrastructure presented is the logical step for
                    bringing crowdfinancing to the next level by utilizing the
                    most efficient technology, supported by our experienced team
                    and partners.
                  </p>
                </div>
              </div>
            </div>
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
              Alternative
              <br />Finance &amp;
            </h2>
            <h1>
              the Future of
              <br />Crowdinvesting
            </h1>
            <div className="quot-text">
              <span className="quote-icon">
                <img src="../img/white-quote.png" alt="quote" />
              </span>
              <p>
                "Alternative business funding increased considerably, with
                €5,431 million raised for over 9,400 start-ups and SMEs across
                Europe in 2015 – and research shows that it will grow even more,
                globally.*"
              </p>
            </div>
          </div>
          <div className="text-block__right">
            <p>
              In the last couple of years, due to having increasing numbers of
              innovative and rapidly-growing SMEs, startups and real estate
              projects, traditional forms of financing are unable to fit the
              needs of innovative ventures. New and alternative forms of
              financing are the solution to closing the financial gap, with the
              most important ones being crowdfunding or crowdinvesting
            </p>
            <p>
              Back in 2013, CONDA took the first step to closing this financial
              gap by creating an innovative crowdinvesting platform that
              connects companies with investors who would help their ideas
              evolve into profitable business without intermediaries, and by
              participating in the success of these businesses.
            </p>
            <p>* (Cambridge Centre for Alternative finance, 2016)</p>
          </div>
          <div className="first-section-img">
            <img src="../img/sec-grap1.png" alt="img" />
          </div>
        </div>
        <div className="second-section">
          <div className="section-image">
            <img src="../img/sec-grap2.png" alt="img" />
          </div>
          <div className="second-section__text">
            <h2>Power of the Crowd:</h2>
            <h1>The Future of Financing</h1>
            <p>
              The industry for alternative financing is growing rapidly and with
              it, more different and non-standardized platforms for
            </p>
            <p>
              ICOs and crowdfinancing are popping up. CONDA believes that the
              future of financing lies in the power of the crowd. At the moment,
              the power of the crowd is proving to be on a good path toward
              fulfilling the existing financing gap, but it is also obvious that
              it has much more to overcome, such as the lack of decentralization
              and full-transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTemplate;

// export default ({ data }) => {
//   const { markdownRemark: post } = data

//   return (
//     <AboutSectionTemplate
//       contentComponent={HTMLContent}
//       title1={post.frontmatter.title}
//       content={post.html}
//     />
//   )
// }

// export const aboutSectionQuery = graphql`
//   query AboutSection($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title1
//         title2
//       }
//     }
//   }
// `
