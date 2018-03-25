import React from "react";
import { AboutSectionTemplate } from "../../templates/about-section";



const AboutSectionPreview = ({ entry, getAsset }) => {
  
  const entryFacts = entry.getIn(['data', 'facts'])
  const facts = entryFacts ? entryFacts.toJS() : []

  return (

  <AboutSectionTemplate
      title={entry.getIn(["data", "title"])}
      title1={entry.getIn(["data", "title1"])}
      title2={entry.getIn(["data", "title2"])}
      facts={facts}
      crowdinvesting={crowdinvesting}
    />

    
)};

export default AboutSectionPreview;
