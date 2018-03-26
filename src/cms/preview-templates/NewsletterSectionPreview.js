import React from "react";
import { NewsletterSectionTemplate } from "../../templates/newsletter-section";

const NewsletterSectionPreview = ({ entry }) => {
  return (
    <NewsletterSectionTemplate
      title1={entry.getIn(["data", "title1"])}
      title2={entry.getIn(["data", "title2"])}
      placeholder={entry.getIn(["data", "quote"])}
      label={entry.getIn(["data", "label"])}
    />
  );
};

export default NewsletterSectionPreview;
