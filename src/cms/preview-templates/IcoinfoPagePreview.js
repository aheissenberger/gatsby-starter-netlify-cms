import React from 'react'
import { IcoinfoPageTemplate } from '../../templates/icoinfo-page'

const IcoinfoPagePreview = ({ entry, widgetFor }) => (
  <IcoinfoPageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default IcoinfoPagePreview
