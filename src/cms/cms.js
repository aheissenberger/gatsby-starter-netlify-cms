import CMS from 'netlify-cms'
import React from "react";
import PreviewLayout from './PreviewLayout'

import AboutSectionPreview from './preview-templates/AboutSectionPreview'
import SolutionSectionPreview from './preview-templates/SolutionSectionPreview'
import TokenSectionPreview from './preview-templates/TokenSectionPreview'
import ICOTeamSectionPreview from './preview-templates/ICOTeamSectionPreview'
import NewsletterSectionPreview from './preview-templates/NewsletterSectionPreview'
import FAQSectionPreview from './preview-templates/FAQSectionPreview'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import IcoinfoPagePreview from './preview-templates/IcoinfoPagePreview'


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
registerPreviewTemplate('blog', BlogPostPreview)
registerPreviewTemplate('icoinfo', IcoinfoPagePreview)

CMS.registerPreviewTemplate('products', ProductPagePreview)
//CMS.registerPreviewTemplate('blog', BlogPostPreview)
