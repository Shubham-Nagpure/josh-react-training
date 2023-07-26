import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import useFetch from "../hooks/useFetch";

const TodoDetail = () => {
  const { id } = useParams();
  const { data } = useFetch('/todos/' + id);

  return (
    <>
      <Navbar />
      <div className="flex todo-app">
        <div className="todo-details">
          <div className="title"> TODO DETAILS : {data.id}</div>
          <div className="title"> DETAILS : {data.text}</div>
          <div className="title"> DETAILS : {data.dueDate}</div>
          <div className="title"> Status : {data.status ? "Completed" : "InProgress"} </div>
        </div>
      </div>
    </>
  );
};

export default TodoDetail;
