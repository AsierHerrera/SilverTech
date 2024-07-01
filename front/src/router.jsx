import {createBrowserRouter,redirect} from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Recursos from "./pages/recursos/Recursos";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/recursos",
          element: <Recursos />
        },

      ]
    },
    {
        path: "/register",
        element: <Register />
    }
    
  ]);

export default router;