import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

import './all.sass'
//import 'font-awesome/css/font-awesome.css'




const TemplateWrapper = ({ children }) => (
  <div className="outer-wrapper">
    <Helmet>
      <title>CRD Toke | CONDA ICO</title> 
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
