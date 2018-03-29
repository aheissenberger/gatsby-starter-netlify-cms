import React from 'react'
import { IcoinfoTemplate } from '../../templates/icoinfo-page'

const IcoinfoPagePreview = ({ entry, widgetFor }) => {
    return (
  <IcoinfoTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)}

export default IcoinfoPagePreview
