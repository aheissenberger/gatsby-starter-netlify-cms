import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
//import './bootstrap.min.css'
//import './child-theme.css'
import Footer from '../components/Footer';

const TemplateWrapper = ({ children }) => (
  <div className="outer-wrapper">
    <Helmet>
      <title>CRD Toke | CODA ICO</title> 
    </Helmet>
    <Navbar />
    {children()}  
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
