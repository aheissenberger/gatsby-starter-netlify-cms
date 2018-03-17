import React from "react";
import { AboutPageTemplate } from "../../templates/about-page";



const AboutPagePreview = ({ entry, getAsset }) => {
  
  const entryFacts = entry.getIn(['data', 'facts'])
  const facts = entryFacts ? entryFacts.toJS() : []

  return (

  <AboutPageTemplate
      title={entry.getIn(["data", "title"])}
      title1={entry.getIn(["data", "title1"])}
      title2={entry.getIn(["data", "title2"])}
      facts={facts}
    />

    
)};

export default AboutPagePreview;
