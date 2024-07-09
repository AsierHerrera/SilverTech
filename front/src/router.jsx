import { Navigate, createBrowserRouter, redirect } from "react-router-dom";

// Importaciones de páginas
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Courses from './pages/Courses';
import HireExperts from './pages/HireExperts';
import UserPanel from './pages/UserPanel';
import Recursos from "./pages/recursos/Recursos";
import Recurso from "./pages/recursos/Recurso";
import Eventos from "./pages/eventos/Eventos";
import Evento from "./pages/eventos/Evento";
import Pago1 from "./pages/pagos/Pago1";
import Pago2 from "./pages/pagos/Pago2";
import Pago3 from "./pages/pagos/Pago3";
import Subforum from "./pages/subforom/Subforum";
import SubforumDetails from "./pages/subforumDetails/SubforumDetails";
import { getOnePostInSubforumById } from "./utils/fetch";
import Landing from "./pages/Landing";
import Guias from "./pages/Guias";
import Libros from "./pages/Libros";
import DocumentacionLegalAccesibilidad from "./pages/DocumentacionLegalAccesibilidad";
import Biblioteca from "./pages/Biblioteca";
import Publicaciones from "./pages/Publicaciones";
import SilverEconomy from "./pages/SilverEconomy";

import NuestrosExpertos from "./pages/NuestrosExpertos";

import CursosTalleres from "./pages/recursos/Recursos";
/* import PlantillasHerramientas from "./pages/PlantillasHerramientas"; */
import PERFILEMPRESA from "./pages/Proyectos/PERFILEMPRESA";
/* import CrearProyecto from "./pages/Proyectos/PERFILEMPRESA"; */
/* import ProyectosFinalizados from "./pages/ProyectosFinalizados";
import DocumentacionLegal from "./pages/DocumentacionLegal"; */
/*  import Eventos from "./pages/Eventos"; */
import Charlas from "./pages/Charlas"; 
import CrearProyecto from "./pages/Crear proyectos/CrearProyecto";
/* import MisDatos from "./pages/UserPanel";
import MisFormaciones from "./pages/UserPanel"; */
import ProyectosFinalizados from "./pages/Proyectos Finalizados/ProyectosFinalizados"
import Formulario2 from "./pages/longform/Formulario2";
import Dashboard from "./pages/Dashboard/DashboardFormaciones";
import DashboardEventos from "./pages/Dashboard/DashboardEventos";
import CrearRecurso from "./pages/Crear recurco/CrearRecurso";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, 
    children: [
      { path: "/form2", element: <Formulario2 /> },
      { path: "/landing", element: <Home /> },
      { path: "/recursos", element: <Recursos /> },
      { path: "/recursos/:id", element: <Recurso /> },
      { path: "/foro", element: <Subforum /> },
      {
        path: "/foro/:id",
        element: <SubforumDetails />,
        loader: ({ params }) => getOnePostInSubforumById(params.id),
      },
      { path: "/expertos", element: <NuestrosExpertos /> },
/*       { path: "/libros", element: <Libros /> }, */
      {
        path: "/documentacion-legal-accesibilidad",
        element: <DocumentacionLegalAccesibilidad />,
      },
      { path: "/biblioteca", element: <Biblioteca /> },
      { path: "/publicaciones", element: <Publicaciones /> },
      { path: "/silver-economy", element: <SilverEconomy /> }, 
/*    { path: "/plantillas-herramientas", element: <PlantillasHerramientas /> }, */
      { path: "/proyectos", element: <PERFILEMPRESA /> },
      { path: "/crear-proyecto", element: <CrearProyecto /> },
      { path: "/proyectos-finalizados", element: <ProyectosFinalizados /> },


/*    { path: "/proyectos-finalizados", element: <ProyectosFinalizados /> }, */
/*    { path: "/documentacion-legal", element: <DocumentacionLegal /> }, */
      { path: "/eventos", element: <Eventos /> },
      { path: "/eventos/:id", element: <Evento /> },
      { path: "/pago/:id", element: <Pago1 /> },
      { path: "/pago2/:id", element: <Pago2 /> },
      { path: "/pago3/:id", element: <Pago3 /> },
      { path: "/charlas", element: <Charlas /> }, 
     { path: "/mis-datos", element: <UserPanel /> },
      { path: "/mis-formaciones", element: <UserPanel /> },
      { path: "/ajustes", element: <UserPanel /> },
      { path: "/dashboard-formaciones", element: <Dashboard /> },
      { path: "/dashboard-eventos", element: <DashboardEventos /> },


      
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/crear-recurso",
        element: <CrearRecurso/>

      }
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
]);

export default router;
