import {createBrowserRouter,redirect} from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Subforum from "./pages/subforom/Subforum";

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

      ]
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/subforum",
        element: (
          <Subforum />
        ),
        // children: [
          // { index: true, element: <Home /> }, 
          // {
          //   path: ":subforumId",
          //   element: <SubforumDetails />, 
          // },
        // ],
      },
    
  ]);

export default router;