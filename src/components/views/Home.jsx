import React from "react";
import NewsList from "./NewsList";
import { getAllNewsfromApi } from "./getAllNewsFromApi";

class Home extends React.Component {
  state = {
    articles: [],
    apiError: "",
    filteredArticles : [],
    searchTopic: "",
  };
  async componentDidMount() {
    try {
      const response = await getAllNewsfromApi();
      this.setState({ articles: response.articles });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }
  handleSearch = (event) => {
      const searchValue = event.target.value.toLowerCase();
      console.log(searchValue);
      let filteredArticles=  this.state.articles.filter((article) => {
          return(
            article.title.toLowerCase().includes(searchValue) ||
              article.description.toLowerCase().includes(searchValue)    
          );
      });
      this.setState({ filteredArticles: filteredArticles });
  };

  render() {
      const { articles, apiError } = this.state;
    return (
      <div className="mt-5">
       <form className="d-flex mb-3">
          <input
            className="form-control"
            type="search"
            placeholder="Search for News"
            aria-label="Search"
            onInput={this.handleSearch}
          />
        </form>
        <h1 className="mt-5 mb-5">Welcome to News Page</h1>
        <div className="card">
          <h5 className="card-title">Top News Headlines</h5>
          {articles.length > 0 && <NewsList articles= {articles}/>}
          {apiError && <p> Could not fetch article due to some problem. Please try again</p>}
        </div>
      </div>
    );
  }
}

export default Home;
