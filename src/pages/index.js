import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero';
import { AboutSectionTemplate } from '../templates/about-section'
import { SolutionSectionTemplate } from '../templates/solution-section';
import { TokenSectionTemplate } from '../templates/token-section';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: aboutData }  = data.about;
    const { edges: solutionData }  = data.solution;
    const { edges: tokenData }  = data.token;
    //const { edges: posts } = data.allMarkdownRemark

    return (
      <React.Fragment>
        <Hero />
        <AboutSectionTemplate title={aboutData[0].node.frontmatter.title}
      title1={aboutData[0].node.frontmatter.title1}
      title2={aboutData[0].node.frontmatter.title2}
      facts={aboutData[0].node.frontmatter.facts}
      crowdinvesting= {aboutData[0].node.frontmatter.crowdinvesting}  />
      <SolutionSectionTemplate 
        title1={solutionData[0].node.frontmatter.title1}
        title2={solutionData[0].node.frontmatter.title2}
        quote={solutionData[0].node.frontmatter.quote}
        description={solutionData[0].node.frontmatter.description}
      />
      <TokenSectionTemplate 
        title1={tokenData[0].node.frontmatter.title1}
        title2={tokenData[0].node.frontmatter.title2}
        quote={tokenData[0].node.frontmatter.quote}
        description={tokenData[0].node.frontmatter.description}
        whitepaper={tokenData[0].node.frontmatter.whitepaper}
        icodetails={tokenData[0].node.frontmatter.icodetails}
        reasonswhy={tokenData[0].node.frontmatter.reasonswhy}
      />
      </React.Fragment>
      
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    
    about:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(\/sections\/about)/.*\\.md$/"}}) {

      edges {
        node {
          ...AboutDetails
        }
      }
    }
    solution:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(\/sections\/solution)/.*\\.md$/"}}) {

      edges {
        node {
          ...SolutionDetails
        }
      }
    }
    token:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(\/sections\/token)/.*\\.md$/"}}) {

      edges {
        node {
          ...TokenDetails
        }
      }
    }

    
  }
`
