import React, { useState } from "react";
import datalist from "../JSON/list.json";

export const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const handleChange = e => (
    setInput(e.target.value)
  )
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    })
    setInput('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What do you need to do?"
          value={input}
          name="text"
          onChange={handleChange}
          className="todo-input "
        ></input>
        <button>Add Item</button>
      </form>
    </div>
  );
};
