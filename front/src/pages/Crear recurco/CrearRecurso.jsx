import React, { useState } from 'react';
import styles from "./CrearRecurso.module.css";
import { createRecurso } from '../../utils/fetch';

const CrearRecurso = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    modality: 'Presencial',
    startDate: '',
    endDate: '',
    price: '',
    instructor: '',
    resourceType: 'Formación',
    availableSlots: ''
  });

  const [errors, setErrors] = useState({});
  const [creacionexistosa, setCreacionRxistosa] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validate = () => {
    let formErrors = {};
    let valid = true;
    
    if (!formData.name) {
      formErrors.name = 'El nombre del recurso es requerido.';
      valid = false;
    }
    if (!formData.description) {
      formErrors.description = 'La descripción del recurso es requerida.';
      valid = false;
    }
    if (!formData.modality) {
      formErrors.modality = 'La modalidad del recurso es requerida.';
      valid = false;
    }
    if (!formData.startDate) {
      formErrors.startDate = 'La fecha de inicio es requerida.';
      valid = false;
    }
    if (!formData.endDate) {
      formErrors.endDate = 'La fecha de finalización es requerida.';
      valid = false;
    }
    if (!formData.price) {
      formErrors.price = 'El precio es requerido.';
      valid = false;
    }
    if (!formData.instructor) {
      formErrors.instructor = 'El nombre del instructor es requerido.';
      valid = false;
    }
    if (!formData.availableSlots) {
      formErrors.availableSlots = 'La cantidad de cupos disponibles es requerida.';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await createRecurso(formData);
        console.log('Recurso creado:', response.data);
        setCreacionRxistosa(true);
        setFormData({
          name: '',
          description: '',
          modality: 'Presencial',
          startDate: '',
          endDate: '',
          price: '',
          instructor: '',
          resourceType: 'Formación',
          availableSlots: ''
        });
        setErrors({});
      } catch (error) {
        console.error('Error al crear el recurso:', error.message);
        setErrors({ form: 'Hubo un error al crear el recurso. Por favor, inténtelo de nuevo.' });
      }
    }
  };

  return (
    <div>
      <p className="navegation-history"> <span>Inicio</span>  {">"} <span>Recursos</span> {">"} Crear Recurso</p> <br /><br />

      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Crear Nuevo Recurso</h2>
        <div className={styles.sectionTitle}>Datos del recurso</div>
        <form onSubmit={handleSubmit}>
          {errors.form && <p className={styles.error}>{errors.form}</p>}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Nombre del recurso</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Nombre del recurso"
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Descripción del recurso</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Descripción del recurso"
            />
            {errors.description && <p className={styles.error}>{errors.description}</p>}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Modalidad del recurso</label>
            <select
              name="modality"
              value={formData.modality}
              onChange={handleChange}
              className={styles.formInput}
              style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }} // Estilo inline agregado
            >
              <option value="Presencial">Presencial</option>
              <option value="Online">Online</option>
            </select>
            {errors.modality && <p className={styles.error}>{errors.modality}</p>}
          </div>
          <div className={styles.dateGroup}>
            <div className={styles.dateField}>
              <label className={styles.formLabel}>Fecha de inicio</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className={styles.formInput}
              />
              {errors.startDate && <p className={styles.error}>{errors.startDate}</p>}
            </div>
            <div className={styles.dateField}>
              <label className={styles.formLabel}>Fecha de finalización</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className={styles.formInput}
              />
              {errors.endDate && <p className={styles.error}>{errors.endDate}</p>}
            </div>
          </div>
          <div className={styles.formGroup}>
            <br />
            <label className={styles.formLabel}>Precio</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Precio del recurso"
            />
            {errors.price && <p className={styles.error}>{errors.price}</p>}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Instructor</label>
            <input
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Nombre del instructor"
            />
            {errors.instructor && <p className={styles.error}>{errors.instructor}</p>}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Tipo de recurso</label>
            <select
              name="resourceType"
              value={formData.resourceType}
              onChange={handleChange}
              className={styles.formInput}
            >
              <option value="Formación">Formación</option>
              <option value="Evento">Evento</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Plazas disponibles</label>
            <input
              type="number"
              name="availableSlots"
              value={formData.availableSlots}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Plazas disponibles"
            />
            {errors.availableSlots && <p className={styles.error}>{errors.availableSlots}</p>}
          </div>
          {creacionexistosa && (
                <div className="alert alert-success" role="alert">
                    Proyecto creado con exito.
                </div>
                )}
          <button type="submit" className={styles.formSubmit}>Crear Recurso</button>
        </form>
      </div>
    </div>
  );
}

export default CrearRecurso;
