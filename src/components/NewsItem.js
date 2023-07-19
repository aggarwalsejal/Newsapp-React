import React from "react";
import { Link } from "react-router-dom";

const NewsItem =(props) =>{
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="card" style={{ width: "22rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}....</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <Link
            rel="noreferrer"
            to={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </Link>
        </div>
      </div>
    );
}

export default NewsItem;
