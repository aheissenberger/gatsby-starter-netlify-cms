import React from 'react'
import { ContentTemplate } from '../../templates/content-page'

const ContentPagePreview = ({ entry, widgetFor }) => {
    return (
  <ContentTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
)}

export default ContentPagePreview
