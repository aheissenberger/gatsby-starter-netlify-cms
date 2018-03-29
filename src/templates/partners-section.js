import React from "react";
import Content, { HTMLContent } from "../components/Content";

export const PartnersSectionTemplate = ({ title, partners }) => {
  return (
    <section id="partners" className="ico-team">
      <div className="our-partners">
        <div className="container">
          <h2>{title}</h2>
          <div className="client-block">
            {partners.map((item, index) => (
              <div className="client-item" key={index}>
                {item.url !== "" ? (
                  <a href={item.url}>
                    <img src={item.image} alt={item.name} />
                  </a>
                ) : (
                  <img src={item.image} alt={item.name} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// export default ({ data }) => {
//   const { markdownRemark: post } = data;
//   return (
//     <PartnersSectionTemplate
//       title={post.frontmatter.title}
//       partners={post.frontmatter.partners}
//     />
//   );
// };

// export const solutionSectionFragment = graphql`
//   fragment PartnersDetails on MarkdownRemark {
//     frontmatter {
//       title
//       partners {
//         name
//         url
//         image
//       }
//     }
//   }
// `;

// export const solutionSectionQuery = graphql`
//   query PartnersSection($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       ...PartnersDetails
//     }
//   }
// `;
