import React, { useState, useEffect, useContext } from 'react';
import { getUserData, userFormData, login } from "../utils/fetch";
import ProfilePicUpload from '../../src/pages/userProfile/ProfilePicUpload';
import "./UserPanel.css";
import UserContext from "../context/userContext";

const UserPanel = () => {
    const { setUser: setGlobalUser } = useContext(UserContext);
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [formData, setFormData] = useState({
        nombreEmpresa: '',
        cif: '',
        direccion: '',
        codigoPostal: '',
        sitioWeb: '',
        telefono: '',
        sector: '',
        descripcion: ''
    });

    useEffect(() => {
        const init = async () => {
            let userData = localStorage.getItem('userData');
            userData = userData ? JSON.parse(userData) : null;
            
            if (!userData) {
                userData = await fetchUserData();
                if (userData && !userData.error) {
                    localStorage.setItem('userData', JSON.stringify(userData));
                }
            }
    
            if (userData) {
                setUser(userData);
                setName(userData.username || '');
                setFormData(userData.companyData || loadFormData());
                setProfilePic(localStorage.getItem('profilePic') || '');
            } else {
                console.log('No user data available');
            }
        };
    
        init();
    }, []);

    const loadFormData = () => {
        const savedFormData = localStorage.getItem('formData');
        return savedFormData ? JSON.parse(savedFormData) : {};
    };

    const storeUserData = (userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    const storeFormData = (formData) => {
        localStorage.setItem('formData', JSON.stringify(formData));
    };

    const fetchUserData = async () => {
        const result = await getUserData();
        return result.data;
    };

    useEffect(() => {
        const init = async () => {
            const userData = await fetchUserData();
            if (userData && !userData.error) {
                setUser(userData);
                setName(userData.username || '');
                setFormData(userData.companyData || loadFormData());
                setProfilePic(localStorage.getItem('profilePic') || '');
            }
        };

        init();
    }, []);

    useEffect(() => {
        storeFormData(formData);
    }, [formData]);

    useEffect(() => {
        if (profilePic) {
            localStorage.setItem('profilePic', profilePic);
        }
    }, [profilePic]);

    const handleNameChange = (e) => {
        e.preventDefault();
        if (name.trim() === '') {
            alert('El nombre de usuario no puede estar vacío');
            return;
        }
        if (name === user.username) {
            alert('El nombre no puede ser el mismo');
            return;
        }
        const updatedUser = { ...user, username: name };
        setUser(updatedUser);
        setGlobalUser(updatedUser);
        storeUserData(updatedUser);
        alert('Se ha actualizado tu nombre de usuario');
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        if (currentPassword.trim() === '' || newPassword.trim() === '') {
            alert('Los campos de contraseña no pueden estar vacíos');
            return;
        }

        const verificationResult = await login({ username: user.username, password: currentPassword });
    
        if (verificationResult.error) {
            alert('La contraseña actual no coincide con la contraseña registrada');
            return;
        }
    
        if (currentPassword === newPassword) {
            alert('La nueva contraseña no puede ser la misma que la actual');
            return;
        }

        const updatedUser = { ...user, password: newPassword };
        setUser(updatedUser);
        storeUserData(updatedUser);
        setCurrentPassword('');
        setNewPassword('');
        alert('Se ha actualizado tu contraseña');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user._id) {
            alert('Error: ID de usuario no encontrado');
            return;
        }
    
        try {
            const result = await userFormData(user._id, { ...user, companyData: formData });
            if (result.error) {
                alert(`Error al guardar los datos de la empresa: ${result.error}`);
            } else {
                alert('¡Datos de la empresa guardados correctamente!');
                const updatedUser = { ...user, companyData: formData };
                setUser(updatedUser);
                setGlobalUser(updatedUser);
                storeUserData(updatedUser);
            }
        } catch (error) {
            alert(`Error al guardar los datos de la empresa: ${error.message}`);
        }
    };
    return (
        <div className='user-profile'>
            <div className='form-container'>
                <h2>Formulario de la empresa</h2>
                <div className='profile-header'>
                    {profilePic && <img src={profilePic} alt='Profile' className='profile-pic' />}
                    <h2>{user.username}</h2>
                    <p>@{user.username}</p>
                </div>

                <div className='profile-details'>
                    <form onSubmit={handleSubmit}>
                        <div className="formGroupStyle">
                            <label className="labelStyle">Nombre de la empresa</label>
                            <input
                                type="text"
                                name="nombreEmpresa"
                                placeholder="Nombre de la empresa"
                                value={formData.nombreEmpresa}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formGroupStyle">
                            <label className="labelStyle">Número de CIF</label>
                            <input
                                type="text"
                                name="cif"
                                placeholder="Número de CIF"
                                value={formData.cif}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formGroupStyle">
                            <label className="labelStyle">Dirección</label>
                            <input
                                type="text"
                                name="direccion"
                                placeholder="Dirección"
                                value={formData.direccion}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formGroupStyle">
                            <label className="labelStyle">Código postal</label>
                            <input
                                type="text"
                                name="codigoPostal"
                                placeholder="Código postal"
                                value={formData.codigoPostal}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formGroupStyle">
                            <label className="labelStyle">Sitio Web</label>
                            <input
                                type="text"
                                name="sitioWeb"
                                placeholder="Sitio Web"
                                value={formData.sitioWeb}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formGroupStyle">
                            <label className="labelStyle">Teléfono</label>
                            <input
                                type="text"
                                name="telefono"
                                placeholder="Teléfono"
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formGroupStyle">
                            <label className="labelStyle">Sector</label>
                            <input
                                type="text"
                                name="sector"
                                placeholder="Sector"
                                value={formData.sector}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formGroupStyle">
                            <label className="labelStyle">Descripción</label>
                            <textarea
                                name="descripcion"
                                placeholder="Descripción"
                                value={formData.descripcion}
                                onChange={handleChange}
                                rows="4"
                            />
                        </div>
                        <div className="formGroupStyle">
                            <label className="labelStyle"></label>
                            <ProfilePicUpload setProfilePic={setProfilePic} />
                        </div>
                        <p></p>
                        <button type="submit">Guardar</button>
                    </form>
                </div>

                <div className='profile-actions'>
                    <form onSubmit={handleNameChange}>
                        <h5>Cambiar Nombre de Usuario</h5>
                        <input
                            type='text'
                            value={name}
                            placeholder="Cambiar Nombre"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button type='submit'>Actualizar Nombre</button>
                    </form>

                    <form onSubmit={handlePasswordChange}>
                        <h5>Cambiar Contraseña</h5>
                        <input
                            type='password'
                            placeholder='Contraseña Actual'
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Nueva Contraseña'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <button type='submit'>Actualizar Contraseña</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserPanel;



/*     const storeUserData = (userData) => {
        try {
            localStorage.setItem('userData', JSON.stringify(userData));
            console.log('User data stored in localStorage:', JSON.stringify(userData));
        } catch (e) {
            console.error('Error storing user data in localStorage', e);
        }
    };

    const storeFormData = (formData) => {
        try {
            localStorage.setItem('formData', JSON.stringify(formData));
            console.log('Form data stored in localStorage:', JSON.stringify(formData));
        } catch (e) {
            console.error('Error storing form data in localStorage', e);
        }
    };

    const fetchUserData = async () => {
        const result = await getUserData(); // Usar la función getUserData del fetch.js
        console.log('User data from server:', result);
        return result.data; // Asegurarse de acceder a la propiedad data
    };

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await fetchUserData();
            if (userData && !userData.error) {
                console.log("user: ", userData);
                const { _id, username } = userData; // Desestructurar _id y username
                if (_id) {
                    console.log("user._id: ", _id); // Verificar que _id está presente
                    setUser(userData);
                    setName(username || '');
                } else {
                    console.error('User ID no encontrado:', userData);
                }
            } else {
                console.error('No saved user data found in localStorage');
            }
        };
        fetchUser();

        const savedFormData = localStorage.getItem('formData');
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }

        const savedProfilePic = localStorage.getItem('profilePic');
        if (savedProfilePic) {
            setProfilePic(savedProfilePic);
        }
    }, []);

    useEffect(() => {
        console.log("User state updated:", user);
    }, [user]);

    useEffect(() => {
        storeFormData(formData);
    }, [formData]);

    useEffect(() => {
        if (profilePic) {
            localStorage.setItem('profilePic', profilePic);
        }
    }, [profilePic]);

    const handleNameChange = (e) => {
        e.preventDefault();
        if (name.trim() === '') {
            alert('El nombre de usuario no puede estar vacío');
            return;
        }
        if (name === user.username) {
            alert('El nombre no puede ser el mismo');
            return;
        }
        const updatedUser = { ...user, username: name };
        console.log("updatedUser: ", updatedUser);
        setUser(updatedUser);
        setGlobalUser(updatedUser); 
        storeUserData(updatedUser);
        alert('Se ha actualizado tu nombre de usuario');
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        const savedUser = user || {};
        if (currentPassword.trim() === '' || newPassword.trim() === '') {
            alert('Los campos de contraseña no pueden estar vacíos');
            return;
        }

        const verificationResult = await login({ username: savedUser.username, password: currentPassword });
    
        if (verificationResult.error) {
            alert('La contraseña actual no coincide con la contraseña registrada');
            return;
        }
    
        if (currentPassword === newPassword) {
            alert('La nueva contraseña no puede ser la misma que la actual');
            return;
        }

        alert('Se ha actualizado tu contraseña');
        const updatedUser = { ...savedUser, password: newPassword };
        setUser(updatedUser);
        storeUserData(updatedUser);
        setCurrentPassword('');
        setNewPassword('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }; */
