import React from "react";
import Link from "gatsby-link";
import Hero from "../components/Hero";
import BlogPostTeaser from "../components/BlogPostTeaser";

export default class BlogIndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const blogposts = data.allMarkdownRemark.edges;
    return (
      <section
        className="blog wow fadeInUp"
        data-wow-duration="0.5s"
        style={{
          visibility: "visible",
          animationDuration: "0.5s",
          animationName: "fadeInUp"
        }}
      >
        <div className="container">
          <div className="blog__header">
            <h2>
              <span>ICO</span> BLOG
            </h2>
          </div>
          <div className="blog__element">
            <div className="row">
              {blogposts.map( (item,index) => {
                const { fields: {slug} } = item.node;
                const { frontmatter: post } = item.node;
                return (
                  <BlogPostTeaser post={post} slug={slug} key={index} />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query BlogIndexPage {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            tags
            description
            image
            path
          }
        }
      }
    }
  }
`;
