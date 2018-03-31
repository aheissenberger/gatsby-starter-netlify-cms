import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  showPost(slug) {
      window.location=this.props.slug;
  }
  render() {
    const { post, slug } = this.props;

    return (
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" onClick={this.showPost.bind(this)} >
        <div className="blog__element--item">
          <div className="image">
            <img src={post.image} alt="image" />
          </div>
          <div className="content">
            <div className="content--text">
              <h3>
                <a href={slug}>{post.title}</a>
              </h3>
            </div>
            <div className="content--details">
              <div className="date-pane">
                <a>By {post.author}</a>
                {/* <span>{post.date}</span> */}
              </div>
              <div className="tag-pane">
                <a>{post.tags}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
