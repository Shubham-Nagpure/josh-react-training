import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

const TodoForm = () => {
  const [inputText, setInputText] = useState("");
  const [inputDueDate, setInputDueDate] = useState("");
  const navigate = useNavigate();
  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleDateChange = (e) => {
    setInputDueDate(e.target.value);
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "" || inputDueDate === "") {
      return;
    }

    const newTodo = {
      id: Math.random(),
      text: inputText,
      dueDate: inputDueDate,
      status: false
    }
    
    fetch('http://localhost:8000/todos', {
      method: 'POST',
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(newTodo)
    }).then(() => {
      navigate("/")
    });

  };

  return (
    <>
      <Navbar />
      <div className="flex form">
        <div className="title header">
          Add New Todo
        </div>
        <form className="todo flex" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add todo here"
            name="inputText"
            value={inputText}
            onChange={handleTextChange}
            className="inputbox"
          />

          <input
            type="date"
            placeholder="Enter Due date"
            name="inputDueDate"
            value={inputDueDate}
            onChange={handleDateChange}
            className="inputbox"
          />
          <button type="submit" className="submit-button">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
