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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
    <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js" type="text/javascript"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="/custom.js" /> 
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
