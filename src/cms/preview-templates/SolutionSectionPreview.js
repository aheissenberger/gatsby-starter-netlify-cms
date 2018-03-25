import React from "react";
import { SolutionSectionTemplate } from "../../templates/solution-section";

const SolutionSectionPreview = ({ entry }) => {
  return (
    <SolutionSectionTemplate
      title={entry.getIn(["data", "title"])}
      title1={entry.getIn(["data", "title1"])}
      title2={entry.getIn(["data", "title2"])}
      quote={entry.getIn(["data", "quote"])}
      description={entry.getIn(["data", "description"])}
    />
  );
};

export default SolutionSectionPreview;
