import React, { useState, useEffect } from 'react';
import ProfilePicUpload from '../../src/pages/userProfile/ProfilePicUpload';
import "../pages/userProfile/UserProfile.css";
import "./UserPanel.css"

const UserPanel = () => {
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
        const savedData = localStorage.getItem('datosEmpresa');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem('userData')) || {};
        setUser(savedUser);
        setName(savedUser.username || '');
    }, []);

    useEffect(() => {
        const savedProfilePic = localStorage.getItem('profilePic');
        if (savedProfilePic) {
            setProfilePic(savedProfilePic);
        }
    }, []);

    const handleNameChange = (e) => {
        e.preventDefault();
        if (name.trim() === '') {
            alert('El nombre de usuario no puede estar vacío');
            return;
        }
        const updatedUser = { ...user, username: name };
        setUser(updatedUser);
        localStorage.setItem('userData', JSON.stringify(updatedUser));
        alert('Se ha actualizado tu nombre de usuario');
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        if (currentPassword.trim() === '' || newPassword.trim() === '') {
            alert('Los campos de contraseña no pueden estar vacíos');
            return;
        }
        alert('Se ha actualizado tu contraseña');
        setCurrentPassword('');
        setNewPassword('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/companies/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                alert('¡Datos de la empresa guardados correctamente!');
                const updatedUser = { ...user, company: data._id };
                setUser(updatedUser);
                localStorage.setItem('userData', JSON.stringify(updatedUser));
            } else {
                alert('Error al guardar los datos de la empresa');
            }
        } catch (error) {
            alert('Error de red al guardar los datos de la empresa');
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
