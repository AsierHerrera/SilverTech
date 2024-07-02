import React, { useState, useEffect, useRef } from 'react';
import './UserProfile.css';
/* import axios from 'axios'; */
import ProfilePicUpload from './ProfilePicUpload';

const UserProfile = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const profileRef = useRef(null);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

/*     useEffect(() => {
        // simulamos llamada API para obtener datos usuario
        fetch('user.json')
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setName(data.name);
            })
            .catch(error => console.error('Error en el fetch user data', error));
        },); */

    // Hacemos llamada API para actualizar nombre usuario:
    const handleNameChange = (e) => {
        e.preventDefault();
        setUser({ ...user, name });
        alert('Se ha actualizado tu usuario');
    };

    // Actualizacion contraseña:
    const handlePasswordChange = (e) => {
        e.preventDefault();
        alert('Se ha actualizado tu contraseña');
        setCurrentPassword('');
        setNewPassword('');
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('datosEmpresa', JSON.stringify(formData));
        alert('¡Datos guardados en el almacenamiento local!');
        // o tb se puede enviar los datos a un servidor
        // fetch('/api/guardar', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Éxito:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    };

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
        <div className='user-profile' ref={profileRef}>
            <h1>Perfil</h1>  {/*desplegable */}

            <div className='profile-header'>
                {/* <img src={user.profile.Picture} alt='Profile' className='profile-picture' /> */}

                <h2>{/* {user.name} */}</h2>
                <p>@{/* {user.name} */}</p>
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
            </form>
            </div>
            <div className='profile-actions'>
                <form onSubmit={handleNameChange}>
                    <h3> Cambiar Nombre Usuario </h3>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />

                    <button type='submit'> Actualizar Nombre </button>
                </form>
                <form onSubmit={handlePasswordChange}>
                    <h4> Cambiar Contraseña </h4>

                    <input
                        type='password'
                        placeholder='Contraseña Actual'
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)} />

                    <input
                        type='password'
                        placeholder='Nueva Contraseña'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)} />

                    <button type='submit'> Actualizar Contraseña </button>
                </form>
            <ProfilePicUpload  />
            </div>
            <button type="submit">Guardar</button>
        </div>
    );
};

export default UserProfile;
