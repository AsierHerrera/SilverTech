import React, { useState } from 'react';
import axios from 'axios';

const ProfilePicUpload = () => {
    const [file, setFile] = useState(null);
    const [profilePic, setProfilePic] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:3030/uploads', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Imagen subida correctamente', response.data);
            setProfilePic('http://localhost3030/uploads/${response.data.file.path}');
        } catch (error) {
            console.error('Error al subir la imagen', error);
        }
    };

    return (
        <div>
            <h2>{}</h2>
            {profilePic && <img src={profilePic} alt='Profile' style ={{ width: '150px', height: '150px', borderRadius: '50%'}} />}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input name="file" type="file" onChange={handleFileChange} accept="image/*" required />
                <button type="submit">Subir Imagen</button>
            </form>
        </div>
    );
};

export default ProfilePicUpload;
