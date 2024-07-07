import React, { useState } from 'react';
import axios from 'axios';

const ProfilePicUpload = ({ setProfilePic }) => {
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
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="profilePicUpload"
            />
        <label htmlFor="profilePicUpload" className="upload-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="upload-icon">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
          Subir imagen
        </label>
      </div>
    );
};

export default ProfilePicUpload;
