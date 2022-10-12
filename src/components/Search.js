import React from "react";

class Search extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.term}
            placeholder="Enter Keyword"
            className="w-100"
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default Search;
