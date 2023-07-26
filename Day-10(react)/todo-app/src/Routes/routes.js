import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoDetail from "../components/TodoDetail";

import {
  ROOT_URL,
  TODOS_CREATE_URL,
  TODOS_DETAILS_URL,
  TODOS_LIST_URL,
} from "./constant";
import NotFound from "../components/NotFound";

const routes = [
  {
    path: ROOT_URL,
    element: <Todo />,
  },
  {
    path: TODOS_LIST_URL,
    element: <Todo />,
  },
  {
    path: TODOS_CREATE_URL,
    element: <TodoForm />,
  },
  {
    path: TODOS_DETAILS_URL,
    element: <TodoDetail />,
  },
  {
    path: "*",
    element: <NotFound />
  }
];

export default routes;
