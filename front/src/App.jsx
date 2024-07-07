import { useState, useEffect } from 'react'
import router from './router.jsx'
import NavBar from "./componentes/NavBar/NavBar.jsx"
import { Navigate, RouterProvider } from 'react-router-dom'
import UserContext from './context/userContext'
import './App.css'
import { getToken } from './utils/local.js'

function App() {
  const [user, setUser] = useState(null);


  useEffect(()=>{
    console.log("user",user);
  },[user]);
 
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  )
}

export default App
