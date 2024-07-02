import "./Root.scss"
import { Outlet, Link, useNavigate } from "react-router-dom";
import { deleteToken, getToken } from "../utils/local";
import { useEffect, useContext } from "react";
import UserContext from "../context/userContext";
import { fetchUserData } from "../utils/fetch";
import NavBar from "../componentes/NavBar/NavBar";

const Root = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
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
    }

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
                </ul>
            </nav>

            <h1>Hello {user?.username}</h1>
            <Outlet />
        </div>    
    */

    return (
        <div>
            <NavBar/>
            <nav>
                <ul>
   
                </ul>
            </nav>

      
            <Outlet />
        </div>    
    )
};

export default Root;