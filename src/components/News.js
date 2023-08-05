import React from "react";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    // eslint-disable-next-line
const[articles, setArticles]=useState([]);
const[loading, setLoading]=useState(true);
const[page, setPage]=useState(1);
const[totalResults, setTotalResults]=useState(0);
// document.title = `${capitalizeFirstLetter(props.category)}- News`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  useEffect(() =>{
    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `http
        ://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.setProgress(100);
      };
      updateNews();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

 const fetchMoreData = async () => {
   
    let url = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
     setPage(page+1)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
  }
    return (
      <div className="container">
        <h1 className="text-center" style={{ margin: "40px 0px;", marginTop: "90px" }}>
          News - Top {capitalizeFirstLetter(props.category)} HeadLines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-3">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 50) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 150)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
}
News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News