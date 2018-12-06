import CMS from 'netlify-cms'
import React from "react";
import PreviewLayout from './PreviewLayout'

import AboutSectionPreview from './preview-templates/AboutSectionPreview'
import SolutionSectionPreview from './preview-templates/SolutionSectionPreview'
import TokenSectionPreview from './preview-templates/TokenSectionPreview'
import ICOTeamSectionPreview from './preview-templates/ICOTeamSectionPreview'
import NewsletterSectionPreview from './preview-templates/NewsletterSectionPreview'
import FAQSectionPreview from './preview-templates/FAQSectionPreview'
import IcoRatingsSectionPreview from './preview-templates/IcoRatingsSectionPreview'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import IcoinfoPagePreview from './preview-templates/IcoinfoPagePreview'
import ContentPagePreview from './preview-templates/ContentPagePreview'


import ProductPagePreview from './preview-templates/ProductPagePreview'

function registerPreviewTemplate(name, template) {
    CMS.registerPreviewTemplate(name, props => (
        <PreviewLayout>
            {React.createElement(template,props)}
        </PreviewLayout>
      ))
}

registerPreviewTemplate('about', AboutSectionPreview)
registerPreviewTemplate('solution', SolutionSectionPreview)
registerPreviewTemplate('token', TokenSectionPreview)
registerPreviewTemplate('icoteam', ICOTeamSectionPreview)
registerPreviewTemplate('newsletter', NewsletterSectionPreview)
registerPreviewTemplate('faq', FAQSectionPreview)
registerPreviewTemplate('icoratings', IcoRatingsSectionPreview)
registerPreviewTemplate('blog', BlogPostPreview)
registerPreviewTemplate('icoinfo', IcoinfoPagePreview)
registerPreviewTemplate('pages', ContentPagePreview)

CMS.registerPreviewTemplate('products', ProductPagePreview)
//CMS.registerPreviewTemplate('blog', BlogPostPreview)

CMS.registerEditorComponent({
    // Internal id of the component
    id: "youtube",
    // Visible label
    label: "Youtube",
    // Fields the user need to fill out when adding an instance of the component
    fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
    // Pattern to identify a block as being an instance of this component
    pattern: /^youtube (\S+)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {
      return {
        id: match[1]
      };
    },
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {
      return 'youtube ' + obj.id;
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(obj) {
      return (
        '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
      );
    }
});