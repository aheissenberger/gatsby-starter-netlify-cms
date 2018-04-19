import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero';
import { AboutSectionTemplate } from '../templates/about-section'
import { SolutionSectionTemplate } from '../templates/solution-section';
import { TokenSectionTemplate } from '../templates/token-section';
import { ICOTeamSectionTemplate } from '../templates/icoteam-section';
import { NewsletterSectionTemplate } from '../templates/newsletter-section';
import { FAQSectionTemplate } from '../templates/faq-section';
import { PartnersSectionTemplate } from '../templates/partners-section';
import { IcoRatingsSectionTemplate } from '../templates/icoratings-section';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: aboutData }  = data.about;
    const { edges: solutionData }  = data.solution;
    const { edges: tokenData }  = data.token;
    const { edges: icoteamData }  = data.icoteam;
    const { edges: newsletterData }  = data.newsletter;
    const { edges: faqData }  = data.faq;
    const { edges: partnersData }  = data.partners;
    const { edges: icoratingsData }  = data.icoratings;
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
        foursteps={tokenData[0].node.frontmatter.foursteps}
      />
      <ICOTeamSectionTemplate 
        team={icoteamData[0].node.frontmatter.team}
        investors={icoteamData[0].node.frontmatter.investors}
        advisoryboard={icoteamData[0].node.frontmatter.advisoryboard}
      />
      <NewsletterSectionTemplate
        title1={newsletterData[0].node.frontmatter.title1}
        title2={newsletterData[0].node.frontmatter.title2}
        placeholder={newsletterData[0].node.frontmatter.placeholder}
        label={newsletterData[0].node.frontmatter.label}
      />
      <FAQSectionTemplate
        title={faqData[0].node.frontmatter.title}
        faqs={faqData[0].node.frontmatter.faqs}
      />
      <IcoRatingsSectionTemplate
      title={icoratingsData[0].node.frontmatter.title}
      partners={icoratingsData[0].node.frontmatter.partners}
      />
      <PartnersSectionTemplate
        title={partnersData[0].node.frontmatter.title}
        partners={partnersData[0].node.frontmatter.partners}
      />
      </React.Fragment>
      
    )
  }
}

export const pageQuery = graphql`
query IndexQuery {
  about: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/sections/about)/.*\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          title
          title1
          title2
          facts {
            heading
            subheading
            description
            image
          }
          crowdinvesting {
            firstsection {
              title1
              title2
              quote
              description
            }
            secondsection {
              title1
              title2
              description
            }
          }
        }
      }
    }
  }
  solution: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/sections/solution)/.*\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          title
          title1
          title2
          quote
          description
        }
      }
    }
  }
  token: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/sections/token)/.*\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          title
          title1
          title2
          quote
          description
          whitepaper
          icodetails {
            description
            buttoncalltoaction {
              label
              url
              info
            }
          }
          reasonswhy {
            buttoncalltoaction {
              label
              url
              info
            }
            reasons {
              icon
              title
              description
            }
          }
          foursteps {
            buttoncalltoaction {
              label
              url
              info
            }
          }
        }
      }
    }
  }
  token: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/sections/token)/.*\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          title
          title1
          title2
          quote
          description
          whitepaper
          icodetails {
            description
            buttoncalltoaction {
              label
              url
              info
            }
          }
          reasonswhy {
            buttoncalltoaction {
              label
              url
              info
            }
            reasons {
              icon
              title
              description
            }
          }
          foursteps {
            buttoncalltoaction {
              label
              url
              info
            }
          }
        }
      }
    }
  }
  icoteam: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/sections/icoteam)/.*\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          team {
            members {
              image
              name
              link
              description
              
            }
          }
          investors {
            members {
              image
              name
              link
              description
              
            }
            quotes {
              name
              quote
              image
            }
          }
          advisoryboard {
            members {
              image
              name
              link
              description
              
            }
          }
        }
      }
    }
  }
  newsletter: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/sections/newsletter)/.*\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          title1
          title2
          placeholder
          label
        }
      }
    }
  }
  faq: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/sections/faq)/.*\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          title
          faqs {
            question
            answer
          }
        }
      }
    }
  }
  partners: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/sections/partners)/.*\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          title
          partners {
            name
            url
            image
          }
        }
      }
    }
  }
  icoratings: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/sections/icoratings)/.*\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          title
          partners {
            name
            url
            image
          }
        }
      }
    }
  }
}

`
