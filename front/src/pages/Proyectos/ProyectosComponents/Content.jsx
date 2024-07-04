import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Content.module.css';

import { getCompanyByUserId } from '../../../utils/fetch'; 

const Content = ({ className = '' }) => {
  const [company, setCompany] = useState(null); 

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const companyData = await getCompanyByUserId(); 
        setCompany(companyData); 
      } catch (error) {
        console.error('Error al obtener los datos de la empresa:', error.message);
 
      }
    };

    fetchCompanyData();
  }, []);

  if (!company) {
    return <div>Cargando datos de la empresa...</div>; 
  }

  return (
    <section className={[styles.content, className].join(' ')}>
      <div className={styles.companyProfile}>
        <h1 className={styles.perfilDeEmpresa}>Perfil de empresa</h1>
        <div className={styles.profileDetails}>
          <div className={styles.profileDetailsInner}>
            <div className={styles.avatarBackgroundParent}>
              <img
                className={styles.avatarBackgroundIcon}
                alt=""
                src="/avatar-background@2x.png"
              />
              <img
                className={styles.avaIcon}
                loading="lazy"
                alt=""
                src="/ava@2x.png"
              />
            </div>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.profileNameTime}>
              <div className={styles.nameTimeContainer}>
                <h1 className={styles.nikcname}>{company.name}</h1>
                <h3 className={styles.time}>{company.description}</h3>
              </div>
            </div>
            <div className={styles.profileContact}>
              <div className={styles.contactContainer}>
                <div className={styles.direccinNmeroCifContainer}>
                  <p className={styles.direccin}>Dirección: {company.address}</p>
                  <p className={styles.nmeroCif}>Número CIF: {company.cif}</p>
                  <p className={styles.sitioWeb}>Sitio Web: <a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></p>                  <p className={styles.contacto}>Contacto: {company.phone}</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
