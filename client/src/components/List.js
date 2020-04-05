import React, { useEffect, useState } from "react";

const List = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const url = "http://localhost:5000/todos/";
      const response = await fetch(url);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const displayTodos = todos.map((todo) => (
    <tr>
      <td>{todo.description}</td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>
  ));

  return (
    <>
      <table className="table mt-3 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{displayTodos}</tbody>
      </table>
    </>
  );
};

export default List;
