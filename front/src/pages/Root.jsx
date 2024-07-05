import "./Root.scss"
import { Outlet, Link, useNavigate } from "react-router-dom";
import { deleteToken, getToken } from "../utils/local";
import { useEffect, useContext, useState } from "react";
import UserContext from "../context/userContext";
/* import UserProfile from "./userProfile/UserProfile"; */
import { fetchUserData } from "../utils/fetch";
import NavBar from "../componentes/NavBar/NavBar";


import BarraBusqueda from "../componentes/BarraBusqueda/BarraBusqueda"
import Landing from "./Landing";


const Root = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [showProfile, setShowProfile] = useState(false);

/*     useEffect(() => {
        if (!getToken()) {
            navigate("/register");
        }
        getUserData();
    }, []);

    async function getUserData() {
        const data = await fetchUserData();
        if (data.error) {
            navigate("/register");
        }
        setUser(data.data);
    }
    async function handleLogout(e) {
        e.preventDefault();
        setUser(null);
        deleteToken();
        navigate("/register");
    } */


const toggleProfile = () => {
    setShowProfile(!showProfile);
};

    /* 
        <div>
            <NavBar/>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/recursos">Recursos</Link>
                    </li>
                    <li>
                        <Link to="/register" onClick={handleLogout}>Logout </Link>   
                    </li>
                  <li>
                        <Link to="/subforum">subforum</Link>
                  </li>

                    <li>
                        
                    </li>

                </ul>
                <div>
                    <button onClick={toggleProfile}>Perfil</button>                    
                </div>
            </nav>

            <h1>Hello {user?.username}</h1>
            <Outlet />
        </div>    
    */

    return (
        <>
{/*         <BarraBusqueda />
        <Outlet /> */}
        <NavBar />
        <Outlet />
        </>
    )
};

export default Root;