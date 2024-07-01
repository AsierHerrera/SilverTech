import "./Root.scss"
import { Outlet, Link,useNavigate } from "react-router-dom";
import { getToken } from "../utils/local";
import { useEffect,useContext, useState } from "react";
import UserContext from "../context/userContext";
import UserProfile from "./userProfile/UserProfile";


const Root = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [showProfile, setShowProfile] = useState(false);

    useEffect(() => {
        if (!getToken()) {
            navigate("/register");
        }
        fetchUserData();
    }, []);

    async function fetchUserData() {
        const data  = await getUserData();
        if(data.error){
            navigate("/register");
        }
        setUser(data.data);
      }

const toggleProfile = () => {
    setShowProfile(!showProfile);
};

    return (
        <div id="root-body">
            <nav>  
                <div>
                    <Link to="/">Inicio</Link>
                </div>              
          
                <div>
                    <Link to="/register">Logout </Link>                    
                </div>
                <div>
                    <button onClick={toggleProfile}>Mi Cuenta</button>                    
                </div>
            </nav>
            {showProfile ? <UserProfile /> : <Outlet />}
            <Outlet />
        </div>
        
    )
};

export default Root;