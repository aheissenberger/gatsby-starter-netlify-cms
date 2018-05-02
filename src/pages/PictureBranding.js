import React from 'react'
import PictureBrandingComponent from '../components/PictureBranding'

const PictureBranding = () => {
    const contentStyle = {
      minHeight: '250px'
    }

    return (
      <section
        className="blog wow fadeInUp"
        data-wow-duration="0.5s"
        style={{
          visibility: "visible",
          animationDuration: "0.5s",
          animationName: "fadeInUp"
        }}>
        <div className="container">
          <div className="blog__header">
            <h2>
              Profile Picture Branding
            </h2>
          </div>
          <div className="blog__element">
            <div className="row" style={contentStyle}>
              <PictureBrandingComponent />
            </div>
          </div>
        </div>
      </section>
    )
}

export default PictureBranding