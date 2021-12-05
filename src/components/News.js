import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
    pageSize: 10,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    apiKey: PropTypes.string,
    apiUrl: PropTypes.string,
    apiOptions: PropTypes.object,
  };

  capitalizeWord(s) {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeWord(this.props.category)} | SP News`;
  }

  async updateNews() {
    this.props.setProgress(20);
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32eacd9c319740e0a620ef9fe420f19c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32eacd9c319740e0a620ef9fe420f19c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <div className="container mt-5">
          <h2
            className="display-2 text-bold text-center mb-5"
            style={{ fontFamily: "Lobster", marginTop: "100px" }}
          >
            Headlines{" "}
            <span className="fs-6">| SP News | {this.props.category}</span>
          </h2>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((e) => {
                  return (
                    <div className="col-md-3">
                      <NewsItem
                        title={
                          e.title ? e.title.slice(0, 45) : "Title Not Provided"
                        }
                        description={
                          e.description
                            ? e.description.slice(0, 88)
                            : "Description Not Provided"
                        }
                        imageUrl={e.urlToImage}
                        newsUrl={e.url}
                        author={e.author}
                        date={e.publishedAt}
                        sourceName={e.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
