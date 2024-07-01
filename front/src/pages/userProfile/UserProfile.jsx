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

    useEffect(() => {
        // simulamos llamada API para obtener datos usuario
        fetch('user.json')
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setName(data.name);
            })
            .catch(error => console.error('Error en el fetch user data', error));
        },);

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
    


    return (
        <div className='user-profile' ref={profileRef}>
            <h1>Mi Cuenta</h1>

            <div className='profile-header'>
                {/* <img src={user.profile.Picture} alt='Profile' className='profile-picture' /> */}
                {/* <ProfilePic /> */}

                <ProfilePicUpload />
                <h2>{user.name}</h2>
                <p>@{user.name}</p>
            </div>
            <div className='profile-details'>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Dirección:</strong> {user.address}</p>
            </div>
            <div className='profile-actions'>
                <form onSubmit={handleNameChange}>
                    <h3> Cambiar Nombre </h3>
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
            </div>
        </div>
    );
};

export default UserProfile;
