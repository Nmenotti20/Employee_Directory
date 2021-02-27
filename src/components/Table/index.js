import React, { Component } from "react";
import SearchForm from "../SearchForm";
import API from "../../utils/API";
import Table from "../../components/Table";
import "./style.css";

var FA = require('react-fontawesome')
 
class Tables extends Component {
  constructor(props) {
    super(props);
  }

  filterById = (event) => {
    event.preventDefault();
    this.setState({
      employee: this.state.employee.filter((item) => item.name.first.value),
    });
  };

  renderEmloyeeData() {
      const mappedArr = this.props.results.map((result) => {
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
                  <FA
                    name = "caret-up"
                    onClick={this.props.sortByFirstName}
                    style={{ color: "black", cursor: "pointer" }}
                  ></FA>
                  First Name
                </th>
                <th scope="col">
                  <FA
                    name = "caret-up"
                    onClick={this.props.sortByLastName}
                    style={{ color: "black", cursor: "pointer" }}
                  ></FA>
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

export default Tables;
