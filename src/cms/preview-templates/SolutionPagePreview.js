import React from "react";
import { SolutionPageTemplate } from "../../templates/solution-page";



const SolutionPagePreview = ({ entry }) => {
  

  return (

  <SolutionPageTemplate
      title={entry.getIn(["data", "title"])}
      title1={entry.getIn(["data", "title1"])}
      title2={entry.getIn(["data", "title2"])}
      quote={entry.getIn(["data", "quote"])}
      description={entry.getIn(["data", "description"])}
    />

    
)};

export default SolutionPagePreview;
