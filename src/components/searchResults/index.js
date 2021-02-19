import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Employee" src={result.picture.thumbnail} className="img-fluid" />
          <p>
              {result.name.first}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
