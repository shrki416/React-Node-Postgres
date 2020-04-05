import React, { useState } from "react";

const Input = () => {
  const [description, setDescription] = useState("");

  const change = (e) => {
    setDescription(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const url = "http://localhost:5000/todos";
      await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  };

  return (
    <>
      <h1 className="mt-5 text-center">todo list</h1>
      <form className="d-flex mt-4" onSubmit={submit}>
        <input
          className="form-control"
          type="text"
          value={description}
          onChange={change}
        />
        <button className="btn btn-primary">Add</button>
      </form>
    </>
  );
};

export default Input;
