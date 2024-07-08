import { useEffect, useState, useContext } from "react";
import { register, login } from "../../utils/fetch";
import { saveToken } from "../../utils/local";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext";
import "./Register.scss";
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Footer2 from "../../componentes/Footer/Footer2";

const initialUserData = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: ""
}

const Register = ({ onLogin }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");
    const [userData, setUserData] = useState(initialUserData);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [showPassword, setShowPassword] = useState({
        password: false,
        passwordRepeat: false
    });
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleUserData = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const togglePasswordVisibility = (field) => {
        setShowPassword(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result;
        if (isRegister) {
            if (!acceptTerms) {
                setError("Debe aceptar los términos y condiciones");
                return;
            }
            result = await register(userData);
            if (!result.error) {
                setIsRegister(false);
                setError("Usuario registrado correctamente");
                setUser(result.user);
                localStorage.setItem('userData', JSON.stringify(result.user));
                navigate("/ajustes");
            } else {
                setError(result.error);
            }
        } else {
            result = await login(userData);
            if (!result.error) {
                setError("Login correcto");
                saveToken(result.token);
                setUser(result.user);
                localStorage.setItem("userData", JSON.stringify(result.user));
                navigate("/");
            } else {
                setError(result.error);
            }
        }
    }

    return (
        <>
        <section className="register-login">
            <h2 id="Welcome">¡Te damos la bienvenida a SILVER<span className="yellow">TECH</span>!</h2>
            {/* <h2>{isRegister ? "Cree una cuenta fácil y rápido" : "Entre usando su cuenta"}</h2> */}
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nombre de usuario</label>
                <input name="username" type="text" value={userData.username} onChange={handleUserData} placeholder="Escribe tu nombre de usuario" />
                {isRegister && (
                    <>
                        <label htmlFor="email">Correo electrónico</label>  
                        <input name="email" type="email" value={userData.email} onChange={handleUserData} placeholder="Escribe tu correo" /> 
                    </>
                )}
               <label htmlFor="password">Contraseña</label>
<div className="password-input-container">
    <FaLock className="lock-icon" />
    <input
        name="password"
        type={showPassword.password ? "text" : "password"}
        value={userData.password}
        onChange={handleUserData}
        placeholder="Escribe tu contraseña"
    />
    <button
        type="button"
        className="toggle-password"
        onClick={() => togglePasswordVisibility('password')}
    >
        {showPassword.password ? <FaEyeSlash /> : <FaEye />}
    </button>
</div>

{isRegister && (
    <>
        <label htmlFor="passwordRepeat">Confirmar contraseña</label>
        <div className="password-input-container">
            <FaLock className="lock-icon" />
            <input
                name="passwordRepeat"
                type={showPassword.passwordRepeat ? "text" : "password"}
                value={userData.passwordRepeat}
                onChange={handleUserData}
                placeholder="Repite tu contraseña"
            />
            <button
                type="button"
                className="toggle-password"
                onClick={() => togglePasswordVisibility('passwordRepeat')}
            >
                {showPassword.passwordRepeat ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
        {/* <div className="checkbox-container">
                            <input 
                                type="checkbox" 
                                id="acceptTerms" 
                                checked={acceptTerms}
                                onChange={(e) => setAcceptTerms(e.target.checked)}
                            />
                            <label htmlFor="acceptTerms">
                                Aceptar las Condiciones Generales, la Política de Privacidad y recibir novedades y promociones.
                            </label>
                        </div> */}
    </>
)}   <div className="checkbox-container">
<input 
    type="checkbox" 
    id="acceptTerms" 
    checked={acceptTerms}
    onChange={(e) => setAcceptTerms(e.target.checked)}
/>
<label htmlFor="acceptTerms">
    Aceptar las <a href="/">Condiciones Generales</a>, la  <a href="/">Política de Privacidad</a> y recibir novedades y promociones.
</label>
</div>
                <button id="btn-enter">{isRegister ? "Registrarse" : "Entrar"}</button>
            </form>
            <button id="btn-change" onClick={() => setIsRegister(prev => !prev)}>
                {isRegister ? "Ya tengo una cuenta" : "Crear una Cuenta"}
            </button>
            <p className="help-text">Si necesitas ayuda, llama al +34 600 000 000.</p>
        </section>
    
    </>
    )
}

export default Register;