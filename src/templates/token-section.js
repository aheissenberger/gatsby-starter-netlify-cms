import React from "react";
import Content, { HTMLContent } from "../components/Content";
import tokenDownloadImage from "../img/token-logo.jpg";
import icoicon01Image from "../img/rocket.png";
import icoicon02Image from "../img/flag.png";
import icoicon03Image from "../img/bell.png";
import icoicon04Image from "../img/token.png";
import ReasonGrid from "../components/Reasons";

export const TokenSectionTemplate = ({
  title1,
  title2,
  quote,
  description,
  whitepaper,
  icodetails,
  reasonswhy,
  foursteps
}) => {
  return (
    <section
      id="token-wrap"
      className="token-wrap wow fadeInUp"
      data-wow-duration="0.5s"
      style={{
        visibility: "visible",
        animationDuration: "0,5s",
        animationName: "fadeInUp"
      }}
    >
      <div className="token">
        <div className="container">
          <div className="token-inner">
            <h2>{title1}</h2>
            <h1>{title2}</h1>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-7">
                <h3>{quote}</h3>
                <p>{description}</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-5">
                <div className="token-logo">
                  <div className="token-logo-inner">
                    <span className="logo-text">
                      For more information, download
                    </span>
                    <a href={whitepaper}>
                      <img
                        src={tokenDownloadImage}
                        alt="Button Download White Paper PDF"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ico-details">
        <div className="container">
          <div className="ico-header">
            <h1>
              <span>ICO</span> DETAILS
            </h1>
            <p>Initial coin offering for Ether/FIAT/Bitcoin.</p>
          </div>
          <div className="ico-top">
            <div className="ico-btn__pane">
              <div className="crwd-token__l">
                <p>CONDA will create up to</p>
                <h2>45,000,000</h2>
                <p>CRWD Tokens</p>
              </div>
              <div className="crwd-token__r">
                <p>CONDA intends to exchange up to</p>
                <h2>22,500,000</h2>
                <p>CRWD Tokens</p>
              </div>
            </div>
            <div className="ico-text">
              <p>
                {icodetails.description}
              </p>
            </div>
            <div className="ico-btn">
              <a href={icodetails.buttoncalltoaction.url} className="btn btn-primary">{icodetails.buttoncalltoaction.label}</a>
              <p>{icodetails.buttoncalltoaction.info}</p>
            </div>
          </div>
          <ul className="row ico-list">
            <li className="col-sm-12 col-md-6 col-lg-3">
              <span className="icon-block">
                <img src={icoicon01Image} alt="icon" />
              </span>
              <h3>Dec 20, 2017</h3>
              <p>Private-sale Start date</p>
            </li>
            <li className="col-sm-12 col-md-6 col-lg-3">
              <span className="icon-block">
                <img src={icoicon02Image} alt="icon" />
              </span>
              <h3>June 4, 2018</h3>
              <p>Pre-sale start date</p>
            </li>
            <li className="col-sm-12 col-md-6 col-lg-3">
              <span className="icon-block">
                <img src={icoicon03Image} alt="icon" />
              </span>
              <h3>Q2, 2018</h3>
              <p>Token Activation Date</p>
            </li>
            <li className="col-sm-12 col-md-6 col-lg-3">
              <span className="icon-block">
                <img src={icoicon04Image} alt="icon" />
              </span>
              <h3>Q2, 2018</h3>
              <p>Token Distribution Bonus Token</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="purchase">
        <div className="container">
          <div className="purchase-head">
            <div className="number">{reasonswhy.reasons.length}</div>
            <div className="text">
              <h2>Reasons why to</h2>
              <h1>Purchase CRWD Tokens</h1>
            </div>
          </div>
          <ReasonGrid reasons={reasonswhy.reasons} />
          <div className="purchase-btn">
            <div className="btn-item">
              <a href={reasonswhy.buttoncalltoaction.url} className="btn btn-primary">
              {reasonswhy.buttoncalltoaction.label}
              </a>
              <p>{reasonswhy.buttoncalltoaction.info}</p>
            </div>
            <div className="community">
              <h3>Join Our ICO Community</h3>
              <div className="commu-icon">
                <a href="https://www.facebook.com/crwdtoken/"  title="facebook" style={{color:"#474b6d"}}>
                <span className="facebook">
                  <i className="fa fa-facebook" aria-hidden="true" />
                  </span>
                </a>
                <a href="https://t.me/conda_ico" title="Telegram" style={{color:"#474b6d"}}>
                <span className="fly">
                  <i className="fa fa-paper-plane" aria-hidden="true" />
                </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="four-step-ico">
        <div className="container">
          <h1>ICO in 4 steps</h1>
          <div className="step-outer">
            <div className="step-block">
              <div className="step-inner">
                <span className="step-number">1</span>
                <p>Announcement</p>
                <span className="step-label success">
                  <i className="fa fa-check" />
                </span>
              </div>
            </div>
            <div className="step-block">
              <div className="step-inner">
                <span className="step-number">2</span>
                <p>Private-Sale</p>
                <span className="step-label success">
                  <i className="fa fa-check" />
                </span>
              </div>
            </div>
            <div className="step-block">
              <div className="step-inner">
                <span className="step-number">3</span>
                <p>Pre-Sale</p>
                <span className="step-label">
                  {/* <i className="fa fa-check" /> */}
                </span>
              </div>
            </div>
            <div className="step-block">
              <div className="step-inner">
                <span className="step-number">4</span>
                <p>Crowd-Sale</p>
                <span className="step-label">
                  {/* <i className="fa fa-check" /> */}
                </span>
              </div>
            </div>
          </div>
          <div className="four-step-btn">
            <div className="btn-inner">
              <a href={foursteps.buttoncalltoaction.url} className="btn btn-primary">
              {foursteps.buttoncalltoaction.label}
              </a>
              <p>{foursteps.buttoncalltoaction.info}</p>
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
//     <TokenSectionTemplate
//       title={post.frontmatter.title}
//       title1={post.frontmatter.title1}
//       title2={post.frontmatter.title2}
//       quote={post.frontmatter.quote}
//       description={post.frontmatter.description}
//       whitepaper={post.frontmatter.whitepaper}
//       icodetails={post.frontmatter.icodetails}
//       reasonswhy={post.frontmatter.reasonswhy}
//       foursteps={post.frontmatter.foursteps}
//     />
//   );
// };

// export const tokenSectionFragment = graphql`
//   fragment TokenDetails on MarkdownRemark {
//     frontmatter {
//       title
//       title1
//       title2
//       quote
//       description
//       whitepaper
//       icodetails {
//         description
//         buttoncalltoaction {
//           label
//           url
//           info
//         }
//       }
//       reasonswhy {
//         buttoncalltoaction {
//           label
//           url
//           info
//         }
//         reasons {
//           icon
//           title
//           description
//         }
//       }
//     }
//   }
// `;

// export const tokenSectionQuery = graphql`
//   query TokenSection($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       ...TokenDetails
//     }
//   }
// `;
