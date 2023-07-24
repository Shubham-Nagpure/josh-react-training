import { createBrowserRouter } from "react-router-dom";
import { ROOT_URL } from "./constant";
import routes from "./routes";

const router = createBrowserRouter(routes, { basename: ROOT_URL });

export default router;
