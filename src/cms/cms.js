import CMS from 'netlify-cms'

import AboutSectionPreview from './preview-templates/AboutSectionPreview'
import SolutionSectionPreview from './preview-templates/SolutionSectionPreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewStyle('/stylesCMS.css')
CMS.registerPreviewTemplate('about', AboutSectionPreview)
CMS.registerPreviewTemplate('solution', SolutionSectionPreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
