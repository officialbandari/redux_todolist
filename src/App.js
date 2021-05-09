import React from "react";
import "./App.css";
import Todo from "./components/pages/Todo";

const App = () => {
  return (
    <>
      <div className="App">
        <h1>Hello Redux Todo</h1>
      </div>
      <div className="Todo_App">
        <Todo />
      </div>
    </>
  );
};

export default App;
