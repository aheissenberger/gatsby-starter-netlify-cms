import React from "react";
import Link from "gatsby-link";
import Hero from "../components/Hero";

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
              {blogposts.map(item => {
                const { fields: {slug} } = item.node;
                const { frontmatter: post } = item.node;
                return (
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="blog__element--item">
                      <a href={slug}>
                        <div className="image">
                          <img src={post.image} alt="image" />
                        </div>
                        <div className="content">
                          <div className="content--text">
                            <h3>{post.title}</h3>
                          </div>
                          <div className="content--details">
                            <div className="date-pane">
                              <a>By {post.author}</a>
                              <span>{post.date}</span>
                            </div>
                            <div className="tag-pane">
                              <a>{post.tags}</a>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
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
