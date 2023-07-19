import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsItem extends Component {
   
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
        <div class="card" style={{width: "22rem"}}>
        <img src={imageUrl} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}<span class="badge bg-success">Success</span></h5> 
          <p class="card-text">{description}....</p>
          <p class="card-text"><small class="text-muted">By {author? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
          <Link rel="noreferrer" to={newsUrl} target="_blank" class="btn btn-sm btn-primary">Read More</Link>
        </div>
      </div>
    )
  }
}

export default NewsItem