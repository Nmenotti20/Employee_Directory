import React from "react";
import "./style.css";

function Rows(props) {
    return (
        props.results.map((result, index) => {
            return (
                <tr key={index}>
                    <th scope="row"></th>
                        <td><img src={result.picture.thumbnail} /></td>

                        <td>{result.name.first}</td>
                        
                        <td>{result.name.last}</td>

                        <td>{result.cell}</td>

                        <td>{result.email}</td>

                        <td>{result.location.city}, {result.location.country}</td>
                </tr>
            )
            
        })
    )
};

export default Rows;