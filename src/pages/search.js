import React, { Component } from "react";
import API from "../utils/API";
// import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/searchResults";
// import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getRandomEmployees()
    // .then(res => console.log(res))
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      const filteredEmployees = this.state.results.filter((employee) => {
        return (employee.name.first.includes(this.state.search))

      })
      this.setState({
        results: filteredEmployees
      })
    // API.getDogsOfBreed(this.state.search)
    //   .then(res => {
    //     if (res.data.status === "error") {
    //       throw new Error(res.data.message);
    //     }
    //     this.setState({ results: res.data.message, error: "" });
    //   })
    //   .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
        <div style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Employee!</h1>
          {/* <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert> */}
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <SearchResults results={this.state.results} />
        </div>
    );
  }
}

export default Search;
