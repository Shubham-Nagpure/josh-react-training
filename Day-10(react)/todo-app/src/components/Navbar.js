import React from "react";
import { Link } from "react-router-dom";
import {
  TODOS_CREATE_URL,
  TODOS_LIST_URL,
} from "../Routes/constant";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2> <Link to={TODOS_LIST_URL}>TODOS</Link></h2>
      <div className="actions">
        <Link to={TODOS_LIST_URL}>Home</Link>
        <Link to={TODOS_CREATE_URL}>New Todo</Link>
      </div>
    </div>
  );
};

export default Navbar;
