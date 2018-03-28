import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
    author={entry.getIn(['data', 'author'])}
    tags={entry.getIn(['data', 'tags'])}
  />
)

export default BlogPostPreview
