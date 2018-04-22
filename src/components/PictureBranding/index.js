import React from 'react'
import ImageUpload from './ImageUpload.js'

const PictureBrandingComponent = () => {
    const imageChangeHandler = () => {
        alert("changed")
    }

    return <ImageUpload previewId="profile-pic-preview" change={imageChangeHandler} />
}

export default PictureBrandingComponent