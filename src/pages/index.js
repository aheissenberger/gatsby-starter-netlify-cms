import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero';
import { AboutPageTemplate } from '../templates/about-page'
import { SolutionPageTemplate } from '../templates/solution-page';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: aboutData }  = data.about;
    const { edges: solutionData }  = data.solution;
    //const { edges: posts } = data.allMarkdownRemark

    return (
      <React.Fragment>
        <Hero />
        <AboutPageTemplate title={aboutData[0].node.frontmatter.title}
      title1={aboutData[0].node.frontmatter.title1}
      title2={aboutData[0].node.frontmatter.title2}
      facts={aboutData[0].node.frontmatter.facts}  />
      <SolutionPageTemplate 
        title1={solutionData[0].node.frontmatter.title1}
        title2={solutionData[0].node.frontmatter.title2}
        quote={solutionData[0].node.frontmatter.quote}
        description={solutionData[0].node.frontmatter.description}
      />
      </React.Fragment>
      // <section className="section">
      //   <div className="container">
      //     <div className="content">
      //       <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
      //     </div>
      //     {posts
      //       .filter(post => post.node.frontmatter.templateKey === 'blog-post')
      //       .map(({ node: post }) => (
      //         <div
      //           className="content"
      //           style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
      //           key={post.id}
      //         >
      //           <p>
      //             <Link className="has-text-primary" to={post.fields.slug}>
      //               {post.frontmatter.title}
      //             </Link>
      //             <span> &bull; </span>
      //             <small>{post.frontmatter.date}</small>
      //           </p>
      //           <p>
      //             {post.excerpt}
      //             <br />
      //             <br />
      //             <Link className="button is-small" to={post.fields.slug}>
      //               Keep Reading →
      //             </Link>
      //           </p>
      //         </div>
      //       ))}
      //   </div>
      // </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    
    about:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(\/pages\/about)/.*\\.md$/"}}) {

      edges {
        node {
          ...AboutDetails
        }
      }
    }
    solution:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(\/pages\/solution)/.*\\.md$/"}}) {

      edges {
        node {
          ...SolutionDetails
        }
      }
    }

    
  }
`
