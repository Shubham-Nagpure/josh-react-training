import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

const TodoForm = () => {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }

    const newTodo = {
      id: Math.random(),
      text: inputText,
      status: false
    }
    
    fetch('http://localhost:8000/todos', {
      method: 'POST',
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(newTodo)
    }).then(() => {
      navigate("/")
    });

    setInputText("");
  };

  return (
    <>
      <Navbar />
      <form className="todo flex" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo here"
          name="inputText"
          value={inputText}
          onChange={handleChange}
          className="inputbox"
        />
        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
