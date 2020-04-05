import React from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Input />
        <List />
      </div>
    </>
  );
}

export default App;
