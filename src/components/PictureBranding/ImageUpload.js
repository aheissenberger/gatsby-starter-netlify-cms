import React, { Component } from 'react'

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    //this._handleSubmit = this._handleSubmit.bind(this);
  }

  /*_handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }*/

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      const readerResult = reader.result
      this.setState({
        file: file,
        imagePreviewUrl: readerResult
      });
      
      this.props.change(readerResult, this.props.previewId)
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} id={this.props.previewId} />);
    }

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <span className={this.props.uploadBtnClasses}>
            Browse Profile Picture <input type="file" onChange={this._handleImageChange} accept="image/*" />
          </span>

          {/*<button type="submit" onClick={this._handleSubmit}>Upload Image</button>*/}
        </form>
        {$imagePreview}
      </div>
    )
  }

}
