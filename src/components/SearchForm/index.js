import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    
    <form className="search">

      <div className="form-group">
        <label htmlFor="employeeName"></label>

        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          type="text"
          className="form-control"
          placeholder="Search the name of an employee you would like to find. "
          id="employee"
        />

        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>

      </div>
    </form>
  );
}

export default SearchForm;
