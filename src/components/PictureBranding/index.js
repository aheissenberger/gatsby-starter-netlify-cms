import React from 'react'
import ImageUpload from './ImageUpload.js'
import mergeImages from './ImageMerge.js';

const PictureBrandingComponent = () => {
    const imageChangeHandler = (base64img, imgId) => {
        const waveOptions = {
            format: 'image/png',
            quality: 0.92,
            width: undefined,
            height: undefined,
            Canvas: undefined,
            customMode: 'wave'
          };
      
          const icoTextOptions = {
            format: 'image/png',
            quality: 0.92,
            width: undefined,
            height: undefined,
            Canvas: undefined,
            customMode: 'icoText'
          };
      
          const icoLogoOptions = {
            format: 'image/png',
            quality: 0.92,
            width: undefined,
            height: undefined,
            Canvas: undefined,
            customMode: 'icoLogo'
          };
      
          let waveDone = false;
          let condaIcoTextDone = false;
          let condaIcoLogoDone = false;
      
          mergeImages([document.querySelector('#'+imgId).src, '/wave.png'], waveOptions).then(b64 => document.querySelector('#'+imgId).src = b64)
          .then(function(){
            waveDone = true;
      
            mergeImages([document.querySelector('#'+imgId).src, '/IcoCondaText.png'], icoTextOptions).then(b64 => document.querySelector('#'+imgId).src = b64)
            .then(function(){
              condaIcoTextDone = true;
      
              mergeImages([document.querySelector('#'+imgId).src, '/IcoLogo.png'], icoLogoOptions).then(b64 => document.querySelector('#'+imgId).src = b64)
              .then(function(){
                condaIcoLogoDone = true;

                const dlLink = document.querySelector('.dlLink');
                dlLink.setAttribute("href", document.querySelector('#'+imgId).src);
                dlLink.style.display = "block";
              });
            });
      
          });
    }

    return (<div>
                <p>Show that you trust in CRWD tokens like we do and brand your profile picture. We do not permanently store your picture</p>
                <p>&nbsp;</p>
                <ImageUpload previewId="profile-pic-preview" change={imageChangeHandler} uploadBtnClasses="btn btn-primary btn-file" />
                <a style={{display:'none'}} className="dlLink btn btn-primary" download="CondaIcoBranding.png" href="">Download</a>
                <p>&nbsp;</p>
            </div>)
}

export default PictureBrandingComponent