import React, { useState } from "react";
import { addTodo, removeTodo, deleteTodo } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);

  return (
    <div>
      <h1>My Todo App </h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(input), setInput(""))}>
        AddTodo
      </button>
      <button onClick={() => dispatch(removeTodo())}>Clear</button>
      {list.map((val) => {
        return (
          <div className="showItems" key={val.id}>
            <h4>
              {val.data}
              <button onClick={() => dispatch(deleteTodo(val.id))}>X</button>
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
