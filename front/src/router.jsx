import {createBrowserRouter,redirect} from "react-router-dom";
import { getRecursos,getRecurso,} from "./utils/fetch";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";

import Forum from './pages/Forum';
import Courses from './pages/Courses';
import HireExperts from './pages/HireExperts';
import UserPanel from './pages/UserPanel';
import Recursos from "./pages/recursos/Recursos";
import Recurso from "./pages/recursos/Recurso";
import Eventos from "./pages/eventos/Eventos";
import Evento from "./pages/eventos/Evento";

import Subforum from "./pages/subforom/Subforum";
import SubforumDetails from "./pages/subforumDetails/SubforumDetails";
import { getOnePostInSubforumById } from "./utils/fetch";

async function fetchRecursos(){
  const result = await getRecursos();
  if(result.error){
      return redirect("/register");
  }
  return result.data;
}
async function fetchRecurso(id){
  const result = await getRecurso(id);    
  if(result.error){
      return redirect("/register");
  }
  const Recurso = result.data;

  return Recurso;
}

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
      {
        path: "/recursos/:id",
        element: <Recurso />,

      },
      {
        path: "/eventos",
        element: <Eventos />,

      },
      {
        path: "/eventos/:id",
        element: <Evento/>,

      },
      {  
        path: "/subforum",
        element: <Subforum />
      },
      {  path: "/subforum/:id",
        element: 
          <SubforumDetails/>,
          loader: ({ params }) => getOnePostInSubforumById(params.id)
        }

    ]
  },
  {
      path: "/register",
      element: <Register />
  },
  
 
  
]);



export default router;