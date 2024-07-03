import {createBrowserRouter,redirect} from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";

import Forum from './pages/Forum';
import Courses from './pages/Courses';
import HireExperts from './pages/HireExperts';
import UserPanel from './pages/UserPanel';
import Recursos from "./pages/recursos/Recursos";

import Subforum from "./pages/subforom/Subforum";
import SubforumDetails from "./pages/subforumDetails/SubforumDetails"
import { getOnePostInSubforumById } from "./utils/fetch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
          path: "/",
          element: <Home />,

      },
      {
        path: "/recursos",
        element: <Recursos />,

    },
    ]
  },
  {
      path: "/register",
      element: <Register />
  },
  {  path: "/subforum",
    element: 
      <Subforum />
    },
    {  path: "/subforum/:id",
      element: 
        <SubforumDetails/>,
        loader: ({ params }) => getOnePostInSubforumById(params.id)
      }
 
  
]);



export default router;