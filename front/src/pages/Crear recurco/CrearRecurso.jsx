import React, { useState } from 'react';
import styles from "./CrearRecurso.module.css";
import { createProject } from '../../utils/fetch';

const CrearRecurso = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    professionalReference: '',
    contactInfo: '',
    description: '',
    beneficiaries: '',
    startDate: '',
    endDate: '',
    expectedEconomicImpact: '',
    expectedSocialImpact: '',
    expectedEnvironmentalImpact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createProject(formData); 
      console.log('Proyecto creado:', response.data);
      // Aquí puedes manejar la respuesta, como mostrar un mensaje de éxito o redireccionar
    } catch (error) {
      console.error('Error al crear el proyecto:', error.message);
      // Maneja el error, muestra un mensaje al usuario, etc.
    }
  };

  return (
    <div>
    <p className="navegation-history" > <span>Inicio</span>  {">"} <span>Recursos</span> {">"} <span></span>Crear Recurso</p>

    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Crear Nuevo Recurso</h2>
      <div className={styles.sectionTitle}>Datos del recurso</div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Título del recurso</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Título del proyecto"
          />
        </div>
        {/* Repite para cada campo del formulario */}
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Categoría a la que pertenece el recurso</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Categoría del proyecto"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Referente profesional</label>
          <input
            type="text"
            name="professionalReference"
            value={formData.professionalReference}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Referente profesional"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Contacto de la persona referente</label>
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Teléfono y correo electrónico"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Descripción del recurso</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Descripción del proyecto"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Beneficiarios del recurso</label>
          <input
            type="text"
            name="beneficiaries"
            value={formData.beneficiaries}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Beneficiarios del proyecto"
          />
        </div>
        <div className={styles.dateGroup}>
          <div className={styles.dateField}>
            <label className={styles.formLabel}>Día de inicio del recurso</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>
          <div className={styles.dateField}>
            <label className={styles.formLabel}>Día de finalización</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>
        </div>
        <br />
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Resultados Esperados</label>
          <input
            type="text"
            name="expectedEconomicImpact"
            value={formData.expectedEconomicImpact}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="a) Impacto económico"
          />
          <input
            type="text"
            name="expectedSocialImpact"
            value={formData.expectedSocialImpact}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="b) Impacto social"
          />
          <input
            type="text"
            name="expectedEnvironmentalImpact"
            value={formData.expectedEnvironmentalImpact}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="c) Impacto ambiental"
          />
        </div>
        <button type="submit" className={styles.formSubmit}>Crear Recurso</button>
      </form>
    </div>


    </div>
      );
}

export default CrearRecurso;
