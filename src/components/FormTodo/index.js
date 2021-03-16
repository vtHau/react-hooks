import React, { useState } from "react";
import "./index.css";

function FormTodo(props) {
  const [name, setName] = useState("");
  const { addItem } = props;

  const inputChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: name + "hahha",
      name: name,
    };
    addItem(item);
    setName("");
  };

  return (
    <div className="form-group mt-3">
      <form onSubmit={onSubmit}>
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={inputChange}
        />
        <div className="form-group mt-4 text-center">
          <input
            type="submit"
            className=" text-center btn btn-success"
            value="Add Item"
          />
        </div>
      </form>
    </div>
  );
}

export default FormTodo;
