import React, { useState } from 'react';
import axios from 'axios';

const ProfilePicUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('/uploads', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully', response.data);
        } catch (error) {
            console.error('Error uploading file', error);
        }
    };

    return (
        <div>
            <h2>{}</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input name="file" type="file" onChange={handleFileChange} accept="image/*" required />
                <button type="submit">Subir Imagen</button>
            </form>
        </div>
    );
};

export default ProfilePicUpload;
