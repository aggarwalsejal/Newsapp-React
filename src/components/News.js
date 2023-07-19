import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

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
    capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
    constructor(props){
        super(props);
        this.state={
            articles: [],
            loading: true,
            page:1,
            totalResults:0
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)}- News`;
    }
    async updateNews(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1295cc32a904cbca1ed18f10f6fe100&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parseData= await data.json();
        this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
    }
    async componentDidMount(){
        this.updateNews();
    }
    handlePrevious = async () =>{
        this.setState({page: this.state.page-1});
        this.updateNews();
    }
    handleNext = async () =>{
        this.setState({page: this.state.page+1});
        this.updateNews();
    }
    fetchMoreData= async ()=>{
        this.setState({page:this.state.page+1});
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1295cc32a904cbca1ed18f10f6fe100&page=1&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parseData= await data.json();
        this.setState({articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults, loading: false})
   
    };
  render() {
    return (
<div className='container'>
    <h1 className='text-center mt-4' style={{margin:'40px 0px;'}}>News - Top {this.capitalizeFirstLetter(this.props.category)} HeadLines</h1>
    {this.state.loading && <Spinner />}
    <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    hasMore={this.state.articles.length!==this.state.totalResults}
    loader={<Spinner />}
  >
<div className='container'>
    <div className='row my-3'>
        {this.state.articles.map((element)=> {
           return <div className='col-md-4 my-3' key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0, 150):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
            source={element.source.name}/>
            </div>
              })}
                       </div>
                
  </div>
  </InfiniteScroll>
  </div>
 
    )
  }
}

export default News