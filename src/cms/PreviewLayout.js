import React from "react";
import PreviewStyle from "!css-loader!sass-loader!../layouts/all.sass";

class PreviewLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <style type="text/css">{'@import url(https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900);' + PreviewStyle.toString()}</style>
        <div className="outer-wrapper">
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
export default PreviewLayout;
