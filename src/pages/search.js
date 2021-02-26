import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import Rows from "../components/Rows/index";
import Table from "../components/Table";

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  // When the component mounts, get a list of all available base employees and update.
  componentDidMount() {
    API.getRandomEmployees()
    // .then(res => console.log(res))
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

  // handleInputChange
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  // handleFormSubmit
  handleFormSubmit = event => {
    event.preventDefault();
      const filteredEmployees = this.state.results.filter((employee) => {
        return (employee.name.first.includes(this.state.search))

      })
      this.setState({
        results: filteredEmployees
      })
    };

  //Render Search Results  
  render() {
    return (
        <div style={{ minHeight: "80%" }}>
          <h1 className="text-center">Employee Directory</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <Rows results={this.state.results} />
        </div>
    );
  }
}

export default Search;