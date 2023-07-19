import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
        <div class="card" style={{width: "18rem"}}>
        <img src={imageUrl} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}....</h5>
          <p class="card-text">{description}....</p>
          <a rel="noreferrer" href={newsUrl} target="_blank" class="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem