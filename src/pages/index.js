import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero';
import About from '../section/About';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: aboutData }  = data.allMarkdownRemark;
    //const { edges: posts } = data.allMarkdownRemark

    return (
      <React.Fragment>
        <Hero />
        <About data={aboutData[0].node} />
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
    
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(\/pages\/about)/.*\\.md$/"}}) {

      edges {
        node {
          frontmatter {
            title
            title1
            title2
          }
        }
      }
    }
    
  }
`
