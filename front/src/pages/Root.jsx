import "./Root.scss"
import { Outlet, Link, useNavigate } from "react-router-dom";
import { deleteToken, getToken } from "../utils/local";
import { useEffect, useContext, useState } from "react";
import UserContext from "../context/userContext";
import UserProfile from "./userProfile/UserProfile";


import { fetchUserData } from "../utils/fetch";
const Root = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [showProfile, setShowProfile] = useState(false);

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

const toggleProfile = () => {
    setShowProfile(!showProfile);
};

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/register">Logout </Link>   
                    </li>
                </ul>
                <div>
                    <button onClick={toggleProfile}>Mi Cuenta</button>                    
                </div>
            </nav>

            <h1>Hello {user?.username}</h1>
            {showProfile ? <UserProfile /> : <Outlet />}
            <Outlet />
        </div>
    )
};

export default Root;