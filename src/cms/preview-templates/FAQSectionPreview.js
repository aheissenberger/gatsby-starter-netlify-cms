import React from "react";
import { FAQSectionTemplate } from "../../templates/faq-section";

const FAQSectionPreview = ({ entry }) => {
    const entryFAQS = entry.getIn(["data", "faqs"]);
    const faqs = entryFAQS ? entryFAQS.toJS() : [];
    return (
    <FAQSectionTemplate
      title={entry.getIn(["data", "title"])}
      faqs={faqs}
    />
  );
};

export default FAQSectionPreview;
