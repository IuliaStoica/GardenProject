import React, { Component } from "react";
import "./SearchForm.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.submitAction(this.state.searchInput);
    //this.setState({ searchInput: "" });
  }
  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder={this.props.placeholder}
          id="searchInput"
          name="searchInput"
          value={this.state.searchInput}
          onChange={this.handleChange}
        />

        <button type="submit" className="btn btn-primary ml-2">
          Search
        </button>
      </form>
    );
  }
}
export default SearchForm;
