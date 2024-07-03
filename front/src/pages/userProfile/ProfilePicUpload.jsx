import React, { useState } from 'react';
import axios from 'axios';

const ProfilePicUpload = () => {
    const [profilePic, setProfilePic] = useState('');

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await axios.post('http://localhost:3030/uploads', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Imagen subida correctamente', response.data);
                const newProfilePicUrl = `http://localhost:3030/uploads/${response.data.file.filename}`;
                setProfilePic(newProfilePicUrl);
                localStorage.setItem('profilePic', newProfilePicUrl); 
            } catch (error) {
                console.error('Error al subir la imagen', error);
            }
        }
    };

    return (
        <div>
            {profilePic && <img src={profilePic} alt='Profile' style={{ width: '150px', height: '150px', borderRadius: '50%' , alignItems: center}} />}
            <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: 'block', margin: '10px 0' }}
                required
            />
        </div>
    );
};

export default ProfilePicUpload;
