import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useFetch from "../hooks/useFetch";
import { toast } from "react-toastify";

const Todo = () => {
  const { data, isLoading, error } = useFetch();

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

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
      <div className="main-title">
        <b>TODO's</b>
      </div>
      <TodoForm onSubmitHandler={addTodo} />
      <hr />
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
    </>
  );
};

export default Todo;
