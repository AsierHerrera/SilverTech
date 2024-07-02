import {createBrowserRouter,redirect} from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";

import Forum from './pages/Forum';
import Courses from './pages/Courses';
import HireExperts from './pages/HireExperts';
import UserPanel from './pages/UserPanel';

import Subforum from "./pages/subforom/Subforum";

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
    ]
  },
  {
      path: "/register",
      element: <Register />
  },
  {
      path: "/courses",
      element: <Courses />
  },
  {
      path: "/hire-experts",
      element: <HireExperts />
  },
  {
      path: "/user-panel",
      element: <UserPanel />
  },
  {  path: "/subforum",
    element: 
      <Subforum />
    }
 
  
]);



export default router;