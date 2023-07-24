import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import { TODOS_LIST_URL } from "../Routes/constant";
import useFetch from "../hooks/useFetch"

const Todo = () => {
  const { data, isLoading, error } = useFetch(TODOS_LIST_URL);
  const [todos, setTodos] = useState([]);

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const latestTodos = todos.filter((todo) => todo.id !== id);
    setTodos(latestTodos);
  };

  useEffect(() => {
    setTodos(data);
  }, [data]);

  return (
    <>
    <Navbar />
    <div className="flex">
      {isLoading ? (
        <div className="flex">
          <div className="spinner" />
          <h5>Loading</h5>
        </div>
      ) : error ? (
        toast.error(error)
      ) : (
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      )}
    </div>
    </>
  );
};

export default Todo;
