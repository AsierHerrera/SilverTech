import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./CrearProyectos.module.css";
import { createProject } from '../../utils/fetch';

const CrearProyecto = () => {
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
    expectedEnvironmentalImpact: '',
    email: '' // Nuevo campo para el email del colaborador
  });

  const [errors, setErrors] = useState({});
  const [creacionExistosa, setCreacionExistosa] = useState(false);
  const navigate = useNavigate();

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
    
    if (!formData.title) {
      formErrors.title = 'El título del proyecto es requerido.';
      valid = false;
    }
    if (!formData.category) {
      formErrors.category = 'La categoría del proyecto es requerida.';
      valid = false;
    }
    if (!formData.professionalReference) {
      formErrors.professionalReference = 'El referente profesional es requerido.';
      valid = false;
    }
    if (!formData.contactInfo) {
      formErrors.contactInfo = 'El contacto de la persona referente es requerido.';
      valid = false;
    }
    if (!formData.description) {
      formErrors.description = 'La descripción del proyecto es requerida.';
      valid = false;
    }
    if (!formData.beneficiaries) {
      formErrors.beneficiaries = 'Los beneficiarios del proyecto son requeridos.';
      valid = false;
    }
    if (!formData.startDate) {
      formErrors.startDate = 'El día de inicio del proyecto es requerido.';
      valid = false;
    }
    if (!formData.endDate) {
      formErrors.endDate = 'El día de finalización del proyecto es requerido.';
      valid = false;
    }
    if (!formData.expectedEconomicImpact) {
      formErrors.expectedEconomicImpact = 'El impacto económico esperado es requerido.';
      valid = false;
    }
    if (!formData.expectedSocialImpact) {
      formErrors.expectedSocialImpact = 'El impacto social esperado es requerido.';
      valid = false;
    }
    if (!formData.expectedEnvironmentalImpact) {
      formErrors.expectedEnvironmentalImpact = 'El impacto ambiental esperado es requerido.';
      valid = false;
    }
    if (!formData.email) {
      formErrors.email = 'El correo electrónico del colaborador es requerido.';
      valid = false;
    }
    
    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await createProject(formData);
        console.log('Proyecto creado:', response.data);
        setCreacionExistosa(true);
        // Limpia el formulario después de la creación exitosa
        setFormData({
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
          expectedEnvironmentalImpact: '',
          email: '' // Limpia el nuevo campo
        });
        setErrors({});
        setTimeout(() => {
          navigate('/proyectos');
        }, 2000);
      } catch (error) {
        console.error('Error al crear el proyecto:', error.message);
        setErrors({ form: 'Hubo un error al crear el proyecto. Por favor, inténtelo de nuevo.' });
      }
    }
  };

  return (
    <div>
      <p className="navegation-history"> <span>Inicio</span>  {">"} <span>Recursos</span> {">"} <span>Cursos y Talleres</span></p><br /><br />

      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Crear Nuevo proyecto</h2>
        <div className={styles.sectionTitle}>Datos del proyecto</div>
        <form onSubmit={handleSubmit}>
          {errors.form && <p className={styles.error}>{errors.form}</p>}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Título del proyecto</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Título del proyecto"
            />
            {errors.title && <p className={styles.error}>{errors.title}</p>}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Categoría a la que pertenece el proyecto</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Categoría del proyecto"
            />
            {errors.category && <p className={styles.error}>{errors.category}</p>}
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
            {errors.professionalReference && <p className={styles.error}>{errors.professionalReference}</p>}
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
            {errors.contactInfo && <p className={styles.error}>{errors.contactInfo}</p>}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Descripción del proyecto</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Descripción del proyecto"
            />
            {errors.description && <p className={styles.error}>{errors.description}</p>}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Beneficiarios del proyecto</label>
            <input
              type="text"
              name="beneficiaries"
              value={formData.beneficiaries}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Beneficiarios del proyecto"
            />
            {errors.beneficiaries && <p className={styles.error}>{errors.beneficiaries}</p>}
          </div>
          <div className={styles.dateGroup}>
            <div className={styles.dateField}>
              <label className={styles.formLabel}>Día de inicio del proyecto</label>
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
              <label className={styles.formLabel}>Día de finalización</label>
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
            <label className={styles.formLabel}>Correo electrónico del colaborador</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Correo electrónico del colaborador"
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
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
            {errors.expectedEconomicImpact && <p className={styles.error}>{errors.expectedEconomicImpact}</p>}
            <input
              type="text"
              name="expectedSocialImpact"
              value={formData.expectedSocialImpact}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="b) Impacto social"
            />
            {errors.expectedSocialImpact && <p className={styles.error}>{errors.expectedSocialImpact}</p>}
            <input
              type="text"
              name="expectedEnvironmentalImpact"
              value={formData.expectedEnvironmentalImpact}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="c) Impacto ambiental"
            />
            {errors.expectedEnvironmentalImpact && <p className={styles.error}>{errors.expectedEnvironmentalImpact}</p>}
          </div>
          {creacionExistosa && (
                <div className="alert alert-success" role="alert">
                    Proyecto creado con éxito.
                </div>
                )}
          <button type="submit" className={styles.formSubmit}>Crear Proyecto</button>
        </form>
      </div>
    </div>
  );
}

export default CrearProyecto;
