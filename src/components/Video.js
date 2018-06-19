import React from 'react'

const Video = ({ url }) => {
    return (
            <div className="video-wrapper">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="400" height="225" src={url} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
            );
  };
  
  export default Video