import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
    static defaultProps={
        country:'in',
        pageSize:8,
        category: 'general'
    }
    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1295cc32a904cbca1ed18f10f6fe100&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parseData= await data.json();
        this.setState({articles: parseData.articles, totalResults: parseData.totalResults, loading: false})
    }
    handlePrevious = async () =>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1295cc32a904cbca1ed18f10f6fe100&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parseData= await data.json();
        this.setState({articles: parseData.articles})
        this.setState({
            page: this.state.page-1,
            articles: parseData.articles,
            loading: false
        })
    }
    handleNext = async () =>{
        if(!(this.state.page+1>Math.ceil(this.state.totalResults/4))){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1295cc32a904cbca1ed18f10f6fe100&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parseData= await data.json();
        this.setState({articles: parseData.articles})
        this.setState({
            page: this.state.page+1,
            articles: parseData.articles,
            loading: false
        })
    }
}
  render() {
    return (
<div className='container'>
    <h1 className='text-center mt-4' style={{margin:'40px 0px;'}}>News - Top HeadLiness</h1>
    {this.state.loading && <Spinner />}
    <div className='row my-3'>
        {!this.state.loading && this.state.articles.map((element)=> {
           return <div className='col-md-4 my-3' key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0, 150):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
              })}
            <div className="conatiner d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-drak" onClick={this.handlePrevious}>&larr; Previous</button>
            <button type="button" className="btn btn-drak" onClick={this.handleNext}>Next &rarr;</button>
          </div>
  </div>
  </div>
    )
  }
}

export default News