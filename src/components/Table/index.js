import React, { Component } from "react";
import SearchForm from "../SearchForm/index";
import API from "../../utils/API";
import Rows from "../../components/Rows/index";
import "./style.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { employee: [{}] };
  }

  componentDidMount() {
    API.search()
      .then((res) => this.setState({ employee: res.data.results }))
      .catch((err) => console.log(err));
  }

  sortByName = (event) => {
    event.preventDefault();
    this.setState({
      employee: this.state.employee.sort((a, b) => {
        if (a.name.first > b.name.first) return 1;
        if (a.name.first < b.name.first) return -1;
      }),
    });
    console.log("Sorting by name . . .");
  };

  filterById = (event) => {
    event.preventDefault();
    this.setState({
      employee: this.state.employee.filter((item) => item.name.first.value),
    });
  };

  renderEmloyeeData() {
      const mappedArr = this.state.employee.map((result) => {
          return (
            <tr key={result.login.uuid}>
                <td><img src={result.picture.medium}/></td>
                <td>{result.name.first}</td>
                <td>{result.name.last}</td>
                <td>{result.phone}</td>
                <td>{result.email}</td>
                <td>{result.location.city}</td>
                <td>{result.location.country}</td>
            </tr>
          );
      });

      return mappedArr;
  }

  render() {
      return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">
                  <i
                    onClick={this.sortByName}
                    className="fas fa-caret-up"
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  First Name
                </th>
                <th scope="col">
                  <i
                    onClick={this.sortByName}
                    className="fas fa-caret-up"
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  Last Name
                </th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Location City</th>
                <th scope="col">Location Country</th>
              </tr>
            </thead>
            <tbody>
                {this.renderEmloyeeData()}
              
             
            </tbody>
          </table>
        </div>
      )
  }
}

export default Table;
