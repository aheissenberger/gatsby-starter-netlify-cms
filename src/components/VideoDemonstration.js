import React from 'react'
import Video from './Video.js'

const VideoDemonstration = ({ url, title, description }) => {
    return (
      <div className="video-demonstration">
        <div className="container no-padding-lr">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
              <Video url={url} />
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="video-demonstration-inner-text">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoDemonstration