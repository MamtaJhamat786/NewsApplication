import { NEWS_API_KEY } from "../../config";
import React from "react";
import NewsList from "./NewsList";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [articles, setArticles] = useState([])
  // const [filteredArticles, setfilteredArticles] = useState([])
  const [apiError, setapiError] = useState("")
  // const [searchTopic, setSearchTopic] = useState("")

//   handleSearch = (event) => {
//     const searchValue = event.target.value.toLowerCase();
//     console.log(searchValue);
//     let filteredArticles=  this.state.articles.filter((article) => {
//         return(
//           article.title.toLowerCase().includes(searchValue) ||
//             article.description.toLowerCase().includes(searchValue)    
//         );
//     });
//     this.setState({ filteredArticles: filteredArticles });
// };
  
 

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`)
    .then(response => response.json())
    .then(data => setArticles(data.articles))  
  },[])


  return ( 
    
    <div className="mt-5">
    {/* <form className="d-flex mb-3">
       <input
         className="form-control"
         type="search"
         placeholder="Search for News"
         aria-label="Search"
         onInput={this.handleSearch}
       />
     </form> */}
     <h1 className="mt-5 mb-5">Welcome to News Page</h1>
     <div className="card">
       <h5 className="card-title">Top News Headlines</h5>
       {articles?.length > 0 && <NewsList articles= {articles}/>}
       {apiError && <p> Could not fetch article due to some problem. Please try again</p>}
     </div>
   </div>
   );
}
 
export default Home;