import React from "react";
import { IcoRatingsSectionTemplate } from "../../templates/icoratings-section";

const IcoRatingsSectionPreview = ({ entry }) => {
  const entryPartners = entry.getIn(["data", "partners"]);
  const partners = entryPartners ? entryPartners.toJS() : [];
  return (
    <IcoRatingsSectionTemplate
      title={entry.getIn(["data", "title"])}
      partners={partners}
    />
  );
};

export default IcoRatingsSectionPreview;
