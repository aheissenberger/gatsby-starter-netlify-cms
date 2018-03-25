import React from "react";
import { TokenSectionTemplate } from "../../templates/token-section";
const TokenSectionPreview = ({ entry }) => {
  const entryIcoDetails = entry.getIn(["data", "icodetails"]);
  const icodetails = entryIcoDetails ? entryIcoDetails.toJS() : [];

  const entryreasonwhyDetails = entry.getIn(["data", "reasonswhy"]);
  const reasonswhy = entryreasonwhyDetails ? entryreasonwhyDetails.toJS() : [];

  return (
    <TokenSectionTemplate
      title={entry.getIn(["data", "title"])}
      title1={entry.getIn(["data", "title1"])}
      title2={entry.getIn(["data", "title2"])}
      quote={entry.getIn(["data", "quote"])}
      description={entry.getIn(["data", "description"])}
      whitepaper={entry.getIn(["data", "whitepaper"])}
      icodetails={icodetails}
      reasonswhy={reasonswhy}
    />
  );
};

export default TokenSectionPreview;
