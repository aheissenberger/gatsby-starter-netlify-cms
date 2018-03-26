import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

export const FaqsPageTemplate = ({
  title,
  categories,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      {categories.map( cat => (
          <div>
              <h2>{cat.categorie}</h2>
              <dl>
              {cat.faqs.map( faq => (
                  <React.Fragment>
                  <dt>{faq.question}</dt>
                  <dd>{faq.answer}</dd>
                  </React.Fragment>
              ))}
              </dl>
          </div>
      ))}
    </section>
  )
}

export default props => {
  const { markdownRemark: post } = props.data

  return (
    <FaqsPageTemplate
      categories={post.frontmatter.categories}
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
    />
  )
}

export const faqsPageQuery = graphql`
  query FAQsAll {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/pages/faqs)/.*\\.md$/"}}) {
        edges {
          node {
            frontmatter {
              title
              categories {
                  categorie
                  faqs {
                    question
                    answer
                  }
              }
            }
          }
        }
    }
  }
`
