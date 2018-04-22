import React from 'react'
import ImageUpload from './ImageUpload.js'
import mergeImages from './ImageMerge.js';

const PictureBrandingComponent = () => {
    const imageChangeHandler = (base64img, imgId) => {
        var waveOptions = {
            format: 'image/png',
            quality: 0.92,
            width: undefined,
            height: undefined,
            Canvas: undefined,
            customMode: 'wave'
          };
      
          var icoTextOptions = {
            format: 'image/png',
            quality: 0.92,
            width: undefined,
            height: undefined,
            Canvas: undefined,
            customMode: 'icoText'
          };
      
          var icoLogoOptions = {
            format: 'image/png',
            quality: 0.92,
            width: undefined,
            height: undefined,
            Canvas: undefined,
            customMode: 'icoLogo'
          };
      
          var waveDone = false;
          var condaIcoTextDone = false;
          var condaIcoLogoDone = false;
      
          mergeImages([document.querySelector('#'+imgId).src, '/wave.png'], waveOptions).then(b64 => document.querySelector('#'+imgId).src = b64)
          .then(function(){
            waveDone = true;
      
            mergeImages([document.querySelector('#'+imgId).src, '/IcoCondaText.png'], icoTextOptions).then(b64 => document.querySelector('#'+imgId).src = b64)
            .then(function(){
              condaIcoTextDone = true;
      
              mergeImages([document.querySelector('#'+imgId).src, '/IcoLogo.png'], icoLogoOptions).then(b64 => document.querySelector('#'+imgId).src = b64)
              .then(function(){
                condaIcoLogoDone = true;

                var dlLink = document.querySelector('#dlLink');
                dlLink.setAttribute("href", document.querySelector('img').src);
                dlLink.style.display = "block";
              });
            });
      
          });
    }

    return (<div>
                <ImageUpload previewId="profile-pic-preview" change={imageChangeHandler} />
                <br/>
                <a id="dlLink" style={{display:'none'}} className="btn btn-default" download="CondaIcoBranding.png" href="">Download</a>
            </div>)
}

export default PictureBrandingComponent