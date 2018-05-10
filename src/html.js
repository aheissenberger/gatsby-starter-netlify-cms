import React from "react";

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    const jquery = (
      <script src="/jquery-3.3.2.min.js"  ></script>
    );
    const popper = (
      <script src="/popper.min.js" ></script>
    );
    const modernizr = (
      <script
        src="/modernizr.min.js"
        type="text/javascript"
      />
    );
    const tether = (
      <script src="/tether.min.js" />
    );
    const bootstrap = (
      <script src="/bootstrap.min.js" ></script>
    );
    const customjs = (<script src="/custom.js" />  );

    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="google-site-verification" content="butr6Jr5Jk3HUVI46ClJ4qzZyq1kfntPOvDrFQYblJg" />
          <title>THE CRWD NETWORK | CONDA ICO</title>
          <link rel="icon" href="https://www.conda.eu/wp-content/themes/conda/frontend/images/favicon.ico" type="image/x-icon" />
          {this.props.headComponents}
          {css}
          { jquery }
          { modernizr }
          { popper }
          { tether }
          { bootstrap }
          { customjs }
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
