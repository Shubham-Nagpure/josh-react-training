import "./App.css";
import { Route, Router, RouterProvider } from "react-router-dom";
import router from "./Routes/router";
import Navbar from "./components/Navbar";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
