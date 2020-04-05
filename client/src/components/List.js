import React, { useEffect, useState } from "react";

const List = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos/");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  };

  const displayTodos = todos.map((todo) => (
    <tr key={todo.todo_id}>
      <td>{todo.description}</td>
      <td>Edit</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteTodo(todo.todo_id)}
        >
          Delete
        </button>
      </td>
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
