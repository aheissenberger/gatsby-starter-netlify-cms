import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

export const ContentTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section id="Content" className="blog__details">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="blog__details--header">
              <h1>{title}</h1>
            </div>

            <div className="blog__details--content">
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default props => {
  const { markdownRemark: post } = props.data

  return (
    <ContentTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} description={post.frontmatter.description} />}
      title={post.frontmatter.title}
    />
  )
}

export const pageQuery = graphql`
  query ContentByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
