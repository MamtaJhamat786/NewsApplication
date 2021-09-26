import React from "react";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTopic: "" };
  }
  
  handleChange=(event)=>{
    let newState = {...this.state};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div className="mt-5">
       <form className="d-flex mb-3" onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="search"
            id="search"
            value={this.state.searchTopic}
            placeholder="Search for News"
            aria-label="Search"
            onChange={this.handleChange}
          />
          <button type="button">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
