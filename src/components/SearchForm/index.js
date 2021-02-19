import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          type="text"
          className="form-control"
          placeholder="Type in the name of an employee you would like to find. "
          id="employee"
        />
        {/* <datalist id="employee">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist> */}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
