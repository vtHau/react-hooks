import React from "react";
import "./index.css";

function TotoList(props) {
  const { person, deleteItem } = props;

  return (
    <ul className="list-group">
      {person.map((value, key) => (
        <li
          key={value.id}
          className="list-group-item list-group-item-action cusor-pointer"
        >
          {value.name}
          <span
            className="btn  float-right btn-outline-danger"
            onClick={() => deleteItem(value.id)}
          >
            Delete
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TotoList;
