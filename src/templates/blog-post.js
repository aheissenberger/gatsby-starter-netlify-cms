import React from "react";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  author,
  date,
  tags
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="blog__details">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="blog__details--header">
              <h1>{title}</h1>
              <div className="header-link">
                <a>By {author}</a>
                <span>{date}</span>
                <a>{tags}</a>
              </div>
            </div>

            <div className="blog__details--content">
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default props => {
  const { markdownRemark: post } = props.data;
  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet>
          <title>{`Blog | ${post.frontmatter.title}`}</title>
          <meta property="og:type" content="article" />
          <meta name="description" content={post.frontmatter.description} />
          <meta property="og:title" content={post.frontmatter.title} />
          <meta property="og:description" content={post.frontmatter.description} />
          <meta property="og:image" content={'https://ico.conda.online'+post.frontmatter.image} />
        </Helmet>
        }
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      tags={post.frontmatter.tags}
      author={post.frontmatter.author}
    />
  );
};

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        author
        title
        description
        image
        tags
      }
    }
  }
`;
