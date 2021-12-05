import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, sourceName } = this.props;

    return (
      <>
        <div className="card shadow my-3" style={{ width: "18rem" }}>
          <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {sourceName}
          </span>
          <img
            className="card-img-top"
            height="150px"
            src={
              !imageUrl
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
                : imageUrl
            }
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description} ...{" "}
              <a className="link-secondary" href={newsUrl}>
                See More
              </a>
            </p>
            <hr className="text-danger" />
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a href={newsUrl} className="btn btn-sm btn-outline-secondary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
