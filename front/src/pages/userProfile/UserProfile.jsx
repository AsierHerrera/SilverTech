/* import React, { useState, useEffect } from 'react';
import 'front/src/pages/userProfile/UserProfile.css';
import ProfilePicUpload from './ProfilePicUpload';

const UserProfile = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
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

    // Cargar datos almacenados en localStorage al cargar el componente
    useEffect(() => {
        const savedData = localStorage.getItem('datosEmpresa');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    // Cargar datos de usuario y nombre desde localStorage al cargar el componente
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem('userData')) || {};
        setUser(savedUser);
        setName(savedUser.username || '');
    }, []);

    // Manejar cambio de nombre de usuario
    const handleNameChange = (e) => {
        e.preventDefault();
        const updatedUser = { ...user, username: name };
        setUser(updatedUser.name);
        localStorage.setItem('userData', JSON.stringify(updatedUser));
        setName(name);
        alert('Se ha actualizado tu nombre de usuario');
    };

    // Manejar cambio de contraseña
    const handlePasswordChange = (e) => {
        e.preventDefault();
        alert('Se ha actualizado tu contraseña');
        setCurrentPassword('');
        setNewPassword('');
    };

    // Manejar cambio en los campos del formulario de datos de empresa
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Guardar datos de empresa en localStorage al enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('datosEmpresa', JSON.stringify(formData));
        alert('¡Datos de la empresa guardados correctamente!');
    };

    // Estilos para el formulario
    const formGroupStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    };

    const labelStyle = {
        marginRight: '10px',
        minWidth: '150px'
    };

    return (
        <div className='user-profile'>
            <h1>Perfil</h1>

            <div className='profile-header'>
                <h2>{name}</h2>
                <p>@{name}</p>
            </div>

            <div className='profile-details'>
                <form onSubmit={handleSubmit}>
                    <div style={formGroupStyle}>
                        <label style={labelStyle}><strong>Nombre de la empresa:</strong></label>
                        <input
                            type="text"
                            name="nombreEmpresa"
                            placeholder="Nombre de la empresa"
                            value={formData.nombreEmpresa}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label style={labelStyle}><strong>Número de CIF:</strong></label>
                        <input
                            type="text"
                            name="cif"
                            placeholder="Número de CIF"
                            value={formData.cif}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label style={labelStyle}><strong>Dirección:</strong></label>
                        <input
                            type="text"
                            name="direccion"
                            placeholder="Dirección"
                            value={formData.direccion}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label style={labelStyle}><strong>Código postal:</strong></label>
                        <input
                            type="text"
                            name="codigoPostal"
                            placeholder="Código postal"
                            value={formData.codigoPostal}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label style={labelStyle}><strong>Sitio Web:</strong></label>
                        <input
                            type="text"
                            name="sitioWeb"
                            placeholder="Sitio Web"
                            value={formData.sitioWeb}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label style={labelStyle}><strong>Teléfono:</strong></label>
                        <input
                            type="text"
                            name="telefono"
                            placeholder="Teléfono"
                            value={formData.telefono}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label style={labelStyle}><strong>Sector:</strong></label>
                        <input
                            type="text"
                            name="sector"
                            placeholder="Sector"
                            value={formData.sector}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label style={labelStyle}><strong>Descripción:</strong></label>
                        <input
                            type="text"
                            name="descripcion"
                            placeholder="Descripción"
                            value={formData.descripcion}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Guardar</button>
                </form>
            </div>

            <div className='profile-actions'>
                <form onSubmit={handleNameChange}>
                    <h3>Cambiar Nombre de Usuario</h3>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type='submit'>Actualizar Nombre</button>
                </form>

                <form onSubmit={handlePasswordChange}>
                    <h4>Cambiar Contraseña</h4>
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

                <ProfilePicUpload />
            </div>
        </div>
    );
};

export default UserProfile;
 */