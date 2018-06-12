import React from 'react'

const VideoDemonstration = ({ url, title, description }) => {
    return (
      <div className="video-demonstration">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <iframe width="400" height="225" src={url} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
            </div>
            <div className="hidden-xs hidden-md col-lg-6">
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