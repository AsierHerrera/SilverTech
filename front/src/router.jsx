import { createBrowserRouter, redirect } from "react-router-dom";
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
import SubforumDetails from "./pages/subforumDetails/SubforumDetails";
import { getOnePostInSubforumById } from "./utils/fetch";

/* import Guias from "./pages/Guias"; */
/* import Libros from "./pages/Libros";
import DocumentacionLegalAccesibilidad from "./pages/DocumentacionLegalAccesibilidad";
import Biblioteca from "./pages/Biblioteca";
import Publicaciones from "./pages/Publicaciones";
import SilverEconomy from "./pages/SilverEconomy";
import CursosTalleres from "./pages/CursosTalleres";
import PlantillasHerramientas from "./pages/PlantillasHerramientas"; */
import MisProyectos from "./pages/Proyectos/ProyectosComponents/UserProjects";
import CrearProyecto from "./pages/Proyectos/PERFILEMPRESA";
/* import ProyectosFinalizados from "./pages/ProyectosFinalizados";
import DocumentacionLegal from "./pages/DocumentacionLegal"; */
/* import Eventos from "./pages/Eventos";
import Charlas from "./pages/Charlas";
import MisDatos from "./pages/MisDatos";
import MisFormaciones from "./pages/MisFormaciones"; */
import AjustesPerfil from "./pages/UserPanel";
import PERFILEMPRESA from "./pages/Proyectos/PERFILEMPRESA";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/recursos", element: <Recursos /> },
      { path: "/subforum", element: <Subforum /> },
      {
        path: "/subforum/:id",
        element: <SubforumDetails />,
        loader: ({ params }) => getOnePostInSubforumById(params.id),
      },
/*       { path: "/guias", element: <Guias /> },
      { path: "/libros", element: <Libros /> }, */
/*       {
        path: "/documentacion-legal-accesibilidad",
        element: <DocumentacionLegalAccesibilidad />,
      }, */
/*       { path: "/biblioteca", element: <Biblioteca /> },
      { path: "/publicaciones", element: <Publicaciones /> },
      { path: "/silver-economy", element: <SilverEconomy /> }, */
/*       { path: "/cursos-talleres", element: <CursosTalleres /> },
      { path: "/plantillas-herramientas", element: <PlantillasHerramientas /> }, */
      { path: "/mis-proyectos", element: <PERFILEMPRESA /> },
      { path: "/crear-proyecto", element: <CrearProyecto /> },
/*       { path: "/proyectos-finalizados", element: <ProyectosFinalizados /> },
      { path: "/documentacion-legal", element: <DocumentacionLegal /> }, */
/*       { path: "/foro", element: <Forum /> }, */
/*       { path: "/eventos", element: <Eventos /> },
      { path: "/charlas", element: <Charlas /> },
      { path: "/mis-datos", element: <MisDatos /> },
      { path: "/mis-formaciones", element: <MisFormaciones /> }, */
      { path: "/ajustes-perfil", element: <AjustesPerfil /> },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
